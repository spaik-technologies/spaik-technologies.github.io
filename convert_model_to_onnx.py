#!/usr/bin/env python
"""
Convert PyTorch model to ONNX format for web browser usage.
This script converts the Western Blot separator model to ONNX format.
"""

import torch
import sys
import os
import argparse

def convert_pytorch_to_onnx(input_path, output_path):
    """
    Convert a PyTorch model to ONNX format
    
    Args:
        input_path: Path to the PyTorch model (.pth)
        output_path: Output path for the ONNX model
    """
    print(f"Converting {input_path} to ONNX format...")
    
    # Create output directory if it doesn't exist
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    # Load the PyTorch model
    try:
        # We need to define the model architecture to load the state dictionary
        # This should match the architecture used in the original model
        class WesternBlotSeparator(torch.nn.Module):
            def __init__(self):
                super(WesternBlotSeparator, self).__init__()
                # Define your model architecture here
                # This is a placeholder architecture - replace with the actual one
                self.encoder = torch.nn.Sequential(
                    torch.nn.Conv2d(1, 8, kernel_size=3, padding=1),
                    torch.nn.ReLU(),
                    torch.nn.MaxPool2d(2),
                    torch.nn.Conv2d(8, 16, kernel_size=3, padding=1),
                    torch.nn.ReLU(),
                    torch.nn.MaxPool2d(2)
                )
                self.decoder = torch.nn.Sequential(
                    torch.nn.ConvTranspose2d(16, 8, kernel_size=2, stride=2),
                    torch.nn.ReLU(),
                    torch.nn.ConvTranspose2d(8, 1, kernel_size=2, stride=2),
                    torch.nn.Sigmoid()
                )
            
            def forward(self, x):
                x = self.encoder(x)
                x = self.decoder(x)
                return x
        
        # Create the model and load state dict
        model = WesternBlotSeparator()
        model.load_state_dict(torch.load(input_path, map_location=torch.device('cpu')))
        model.eval()
        
        # Create dummy input with the right dimensions
        # Assuming 64x64 input size based on model name
        dummy_input = torch.randn(1, 1, 64, 64)
        
        # Export to ONNX
        torch.onnx.export(
            model,
            dummy_input,
            output_path,
            export_params=True,
            opset_version=11,
            do_constant_folding=True,
            input_names=['input'],
            output_names=['output'],
            dynamic_axes={
                'input': {0: 'batch_size'},
                'output': {0: 'batch_size'}
            }
        )
        
        print(f"Successfully converted model to ONNX. Saved at {output_path}")
        return True
    except Exception as e:
        print(f"Error converting model: {str(e)}")
        return False

def main():
    parser = argparse.ArgumentParser(description="Convert PyTorch model to ONNX format")
    parser.add_argument("--input", default="./models/model_wb_separator_64_8.pth", 
                      help="Path to the PyTorch model (.pth file)")
    parser.add_argument("--output", default="./public/models/model_wb_separator_64_8.onnx",
                      help="Output path for the ONNX model")
    
    args = parser.parse_args()
    
    # Make sure the model directory exists in public folder
    os.makedirs("./public/models", exist_ok=True)
    
    success = convert_pytorch_to_onnx(args.input, args.output)
    sys.exit(0 if success else 1)

if __name__ == "__main__":
    main()