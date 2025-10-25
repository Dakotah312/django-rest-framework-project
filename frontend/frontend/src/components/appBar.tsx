// src/components/MainAppBar.tsx
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import NewtonXLogo from '../assets/NewtonX_Wordmark_RGB_White-registered.svg';

export default function MainAppBar() {
    return (
        <AppBar
            position="static"
            className="bg-white border-b border-blue-400 shadow"
        >
            <Toolbar className="h-24 flex justify-between items-center px-6">

                {/* Left: Logo */}
                <a href="/">
                    <img
                        src={NewtonXLogo}
                        alt="NewtonX Logo"
                        className="w-36 brightness-0"
                    />
                </a>

                {/* Right: Navigation links */}
                <div className="flex space-x-6">
                    <a
                        href="/form"
                        className="text-black hover:text-blue-600 font-medium transition-colors"
                    >
                        Register
                    </a>
                    <a
                        href="/"
                        className="text-black hover:text-blue-600 font-medium transition-colors"
                    >
                        Professionals
                    </a>
                </div>

            </Toolbar>
        </AppBar>
    );
}
