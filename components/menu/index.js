var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
var pages = ['Products', 'Pricing', 'Blog'];
function ResponsiveAppBar() {
    var _a = React.useState(null), anchorElNav = _a[0], setAnchorElNav = _a[1];
    var handleOpenNavMenu = function (event) {
        setAnchorElNav(event.currentTarget);
    };
    var handleCloseNavMenu = function () {
        setAnchorElNav(null);
    };
    return (_jsx(AppBar, __assign({ position: "static" }, { children: _jsx(Container, __assign({ maxWidth: "xl" }, { children: _jsxs(Toolbar, __assign({ disableGutters: true }, { children: [_jsx(AdbIcon, { sx: { display: { xs: 'none', md: 'flex' }, mr: 1 } }), _jsx(Typography, __assign({ variant: "h6", noWrap: true, component: "a", href: "/", sx: {
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        } }, { children: "LOGO" })), _jsxs(Box, __assign({ sx: { flexGrow: 1, display: { xs: 'flex', md: 'none' } } }, { children: [_jsx(IconButton, __assign({ size: "large", "aria-label": "account of current user", "aria-controls": "menu-appbar", "aria-haspopup": "true", onClick: handleOpenNavMenu, color: "inherit" }, { children: _jsx(MenuIcon, {}) })), _jsx(Menu, __assign({ id: "menu-appbar", anchorEl: anchorElNav, anchorOrigin: {
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }, keepMounted: true, transformOrigin: {
                                    vertical: 'top',
                                    horizontal: 'left',
                                }, open: Boolean(anchorElNav), onClose: handleCloseNavMenu, sx: {
                                    display: { xs: 'block', md: 'none' },
                                } }, { children: pages.map(function (page) { return (_jsx(MenuItem, __assign({ onClick: handleCloseNavMenu }, { children: _jsx(Typography, __assign({ textAlign: "center" }, { children: page })) }), page)); }) }))] })), _jsx(AdbIcon, { sx: { display: { xs: 'flex', md: 'none' }, mr: 1 } }), _jsx(Typography, __assign({ variant: "h5", noWrap: true, component: "a", href: "", sx: {
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        } }, { children: "LOGO" })), _jsx(Box, __assign({ sx: { flexGrow: 1, display: { xs: 'none', md: 'flex' } } }, { children: pages.map(function (page) { return (_jsx(Button, __assign({ onClick: handleCloseNavMenu, sx: { my: 2, color: 'white', display: 'block' } }, { children: page }), page)); }) }))] })) })) })));
}
export default ResponsiveAppBar;
//# sourceMappingURL=index.js.map