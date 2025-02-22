# NepReels

NepReels is a dynamic web application built with Next.js that showcases a collection of video reels integrated with ImageKit for optimized media delivery. It aims to provide a platform for displaying and managing video content with a focus on high performance and scalability.

## Features

- Video upload and display functionality
- Fully responsive video feed similar to social media reels
- Optimized image and video handling using ImageKit
- Authentication and authorization with Next-Auth
- Modern UI design with Tailwind CSS and DaisyUI components

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (>=12.x)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/khadka27/NepReels.git
   ```



2. Navigate to the project directory:
   ```bash
   cd NepReels
   ```
3. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
4. Set up environment variables:
   - Rename `.env.example` to `.env` and fill in your variables
  

## Environment Setup

To run NepReels locally, you need to set up your environment variables which include connections to MongoDB, authentication mechanisms, and configurations for ImageKit.

1. **MongoDB URI**:
   - This is the connection string to your MongoDB database. If you're using a local setup, it might look like this: `mongodb://localhost:27017/your_db_name`. For production, use the connection string provided by your MongoDB hosting like Atlas.

2. **NextAuth Secret**:
   - A secret used to encrypt your session cookies and tokens. You can generate a random one by running `openssl rand -hex 32` in your terminal.

3. **ImageKit Configuration**:
   - These are your public and private keys and the URL endpoint provided by ImageKit when you create an account.

### Example `.env` file

Create a `.env.local` file in the root of your project and add the following lines:

## MongoDB
 ```bash
MONGODB_URI=mongodb://localhost:27017/your_db_name
```

## Authentication
 ```bash
NEXTAUTH_SECRET=your_secret

```

## ImageKit Configuration
 ```bash
NEXT_PUBLIC_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
NEXT_PUBLIC_URL_ENDPOINT=your_imagekit_url_endpoint
```



### Further Integration into Application Configuration

Ensure your application reads these environment variables properly. For example, in Next.js, you would use these variables in your pages or API routes like so:

 ```bash
const dbURI = process.env.MONGODB_URI;
const nextAuthSecret = process.env.NEXTAUTH_SECRET;
const imageKitPublicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const imageKitPrivateKey = process.env.IMAGEKIT_PRIVATE_KEY;
const imageKitEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
```



### Running the Application

To run the application locally, use the following command:

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to view the application.

## Deployment

To deploy the project, you can use Vercel, a platform optimized for Next.js applications. Follow the instructions provided by Vercel to connect your GitHub repository and deploy your application.

## Built With


- [Next.js](https://nextjs.org/) - The React framework used
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [ImageKit](https://www.imagekit.io/) - Used for image optimization and management
- [Next-Auth](https://next-auth.js.org/) - Authentication for React apps

## Authors

- **Abishek Khadka** - _Initial work_ - [khadka27](https://github.com/khadka27)

## Contact

- **Email**: abishekkhadka90@gmail.com
- **GitHub**: [khadka27](https://github.com/khadka27)
- **Portfolio**: [abhishekkhadka.vercel.app](https://abhishekkhadka.vercel.app)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc



### Explanation

This README provides a comprehensive guide that covers all the essentials needed for someone to start using your project. It includes:

- **Project overview and features** - What the project does and its key features.
- **Setup instructions** - How to get the project running on a local machine.
- **Technology stack** - Tools and technologies used in the project.
- **Author and contact info** - Your contact information and links to your GitHub and portfolio for easy access by collaborators or employers.
- **License information** - Standard practice to include which license the project is under (assuming MIT for open source).

Remember to replace placeholders with actual links and project details as necessary, especially around deployment steps and environment setup.

