const _b = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA';

let _r = null;
export default function isWebpSupported() {
    return _r != null ? _r : _r = new Promise(r => {
        const img = new Image();
        img.onload = () => r(_r = img.width > 0 && img.height > 0);
        img.onerror = () => r(_r = false);
        img.src = _b;
    });
}