const fs = require('fs');
const path = require('path');

// Helper function to create a simple placeholder PNG
function createPlaceholderPNG(width = 400, height = 300, text = '') {
  // Simple 1x1 PNG buffer (will be stretched by browsers)
  // PNG header + basic data
  const pngHeader = Buffer.from([
    0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, // PNG signature
    0x00, 0x00, 0x00, 0x0D, // IHDR chunk size
    0x49, 0x48, 0x44, 0x52, // IHDR
    0x00, 0x00, 0x00, 0x01, // Width: 1
    0x00, 0x00, 0x00, 0x01, // Height: 1
    0x08, 0x02, // Bit depth: 8, Color type: 2 (RGB)
    0x00, 0x00, 0x00, // Compression, Filter, Interlace
    0x90, 0x77, 0x53, 0xDE, // CRC
    0x00, 0x00, 0x00, 0x0C, // IDAT chunk size
    0x49, 0x44, 0x41, 0x54, // IDAT
    0x08, 0xD7, 0x63, 0xF8, 0xCF, 0xC0, 0x00, 0x00, 0x00, 0x03, 0x00, 0x01,
    0x0E, 0x1E, 0xAB, 0xD2, // CRC
    0x00, 0x00, 0x00, 0x00, // IEND chunk size
    0x49, 0x45, 0x4E, 0x44, // IEND
    0xAE, 0x42, 0x60, 0x82  // CRC
  ]);
  return pngHeader;
}

const assetsDir = path.join(__dirname, 'public', 'assets', 'images');

// Images to create
const images = [
  'no-image.png',
  'doctor-consultations.png',
  'video-consultation.png',
  'digital-records.png',
  'pharmacy.png',
  'laboratory.png',
  'ambulance-services.png',
  'mobile-ambulance.png',
  'nurse-at-home.png',
  'elderly-care-service.png',
  'verified-doctors.png',
  'ambulance-24-7.png',
  'emergency-ambulance.png',
  'mobile-unit.png',
  'team/dr-arjun-mehta.png',
  'team/priya-nair.png',
  'team/rajesh-kumar.png',
  'team/dr-sunita-sharma.png',
  'team/aditya-bansal.png',
  'team/kavya-verma.png',
];

// Create all placeholder images
images.forEach(imagePath => {
  const fullPath = path.join(assetsDir, imagePath);
  const dir = path.dirname(fullPath);
  
  // Ensure directory exists
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Create placeholder PNG
  const pngBuffer = createPlaceholderPNG();
  fs.writeFileSync(fullPath, pngBuffer);
  console.log(`✅ Created: ${imagePath}`);
});

console.log('All placeholder images created successfully!');
