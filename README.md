# WiFi QR Code Generator

> Generate QR Codes to share your WiFi network quickly and securely

[![Deploy](https://img.shields.io/badge/deploy-vercel-black?style=for-the-badge&logo=vercel)](https://wifiqrcode-generator.vercel.app/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)

 [Click here to access the website](https://wifiqrcode-generator.vercel.app/)

---

# Screenshots

## Form

<img width="402" height="400" alt="image" src="https://github.com/user-attachments/assets/436b7ee3-a529-4520-8d07-dc7313fe41e0" />

## Generated QR Code

<img width="410" height="593" alt="image" src="https://github.com/user-attachments/assets/4d0eafbc-2240-4d08-8970-589f734ec1a7" />

## Downloaded QR Code

<img width="400" height="400" alt="wifi-qrcode-Test123" src="https://github.com/user-attachments/assets/1af78bb7-02ac-4ef5-9b66-b5d4341eaa18" />

## About the Project

Modern web application that allows you to generate QR Codes for WiFi networks in a simple and intuitive way. Just enter the network name (SSID) and password, and the system automatically generates a QR Code that can be scanned by any smartphone for instant network connection.

### Features

- Instant WiFi QR Code generation
- Support for password-protected (WPA) and open networks
- Support for hidden networks
- Complete validation following WiFi standard - SSID: 1-32 chars, Password: 8-63 chars
- Automatic escape of special characters
- Download QR Code as PNG
- Modern interface with smooth animations
- Responsive design for all devices
- Real-time error visual feedback

## Technologies Used

### Core
- **[React 19](https://react.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Vite](https://vitejs.dev/)**

### Styling/UI
- **[Tailwind CSS](https://tailwindcss.com/)**
- **[Lucide React](https://lucide.dev/)**

### Libraries
- **[qrcode](https://www.npmjs.com/package/qrcode)**

## Technical Challenges and Learnings

### Main Challenges Overcome

#### 1. **WiFi QR Code Standard Compliance**
The WiFi QR Code format follows strict technical specifications. I implemented:
- SSID validation (required, maximum 32 characters)
- WPA password validation (minimum 8, maximum 63 characters)
- String in exact format: `WIFI:T:<type>;S:<ssid>;P:<password>;H:<hidden>;;`

#### 2. **Special Character Escaping**
I discovered that characters like `;`, `:`, `,`, `\` and `"` break QR Code reading if not properly escaped. I implemented a function that:
- Escapes `\` first (to avoid double escaping)
- Applies regex to replace all special characters
- Ensures compatibility with all QR Code readers

#### 3. **Architecture with Custom Hooks**
I refactored the code to use custom hooks (`useWifiQRCode`), centralizing all state logic and making components dumb. This improved:
- Code testability
- Logic reusability
- Maintainability

### What I Learned

- Working with technical protocol specifications
- Robust validation and edge case handling
- Advanced string manipulation with regex
- Scalable React component architecture
- TypeScript with generic typing (`<K extends keyof T>`)
- Custom hooks for separation of concerns
- UX best practices (clear flow, visual feedback)

## How to Run Locally

### Prerequisites

- Node.js 18 or higher
- npm, yarn or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/CalebeHilles/qrcode-generator.git

# Enter the project folder
cd qrcode-generator

# Install dependencies
npm install

# Start the development server
npm run dev
```

Access [`http://localhost:5173`](http://localhost:5173) in your browser.

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Generate production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Production Build
```bash
npm run build
```

Optimized files will be in the `dist/` folder and can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc).

## Project Structure
```
qrcode-generator/
├── src/
│   ├── components/
│   │   ├── Checkbox.tsx
│   │   ├── TextInput.tsx   # Text input with validation
│   │   ├── QRCodeForm.tsx
│   │   └── QRCodeDisplay.tsx # Generated QR Code display
│   ├── hooks/
│   │   └── useWifiQRCode.ts # Centralized app logic
│   ├── utils/
│   │   └── wifiString.ts   # Validation, escaping and WiFi string generation
│   ├── constants.ts
│   ├── types.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/ 
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## UX/UI Features

- **Smooth animations** - State transitions with `animate-in`
- **Glassmorphism** - Frosted glass effects in design
- **Visual feedback** - Field-specific error messages
- **Responsive design** - Works perfectly on mobile and desktop
- **Native dark mode** - Modern dark interface
- **Micro-interactions** - Polished hover effects and transitions

## Testing
```bash
# Run tests (when implemented)
npm run test
```

> **Note:** Tests are planned for future implementation, focusing on:
> - WiFi string validation
> - Special character escaping
> - QR Code generation

## Contributing

Contributions are very welcome! To contribute:

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/MyFeature`)
3. Commit your changes (`git commit -m 'feat: add MyFeature'`)
4. Push to the branch (`git push origin feature/MyFeature`)
5. Open a Pull Request

## Roadmap

- [ ] Add generated networks history (localStorage)
- [ ] Implement unit tests
- [ ] Add WPA3 support
- [ ] Allow QR Code color customization
- [ ] Add direct sharing option with Web Share API
- [ ] Light mode

## License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

## Author

**Calebe Hillesheim Lamb**

- [LinkedIn](https://www.linkedin.com/in/calebe-hillesheim-lamb-5a86792a5/)
- [Portfolio](calebe.vercel.app)
