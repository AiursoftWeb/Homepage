export function Logo(props: { className?: string, shadow?: boolean } =
    { className: '', shadow: true }) {

    return (<svg className={props.className} fill="#FFFEF8" xmlns="http://www.w3.org/2000/svg" version="1.1" width="744" height="230" viewBox="0 0 744 230">
        {
            (props.shadow || props.shadow === undefined) && <filter xmlns="http://www.w3.org/2000/svg" id="master_svg1_1_6" filterUnits="objectBoundingBox" colorInterpolationFilters="sRGB" x="-16" y="-13" width="776" height="222"><feFlood floodOpacity="0" result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" /><feOffset dy="3" dx="0" /><feGaussianBlur stdDeviation="4" /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1599999964237213 0" /><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" /><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" /></filter>
        }
        <g xmlns="http://www.w3.org/2000/svg" filter="url(#master_svg1_1_6)">
            <text fillOpacity="1">Anduin's Nas</text>
        </g>
    </svg>);
}