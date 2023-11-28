import React from "react";

const svgWithStyles = `
<?xml version="1.0" encoding="UTF-8"?>
<svg id="a" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 335.86 297.99">
    <defs>
        <style>
            .d {
                fill: #fff;
            }

            .e {
                fill: rgba(255, 255, 255, .45);
            }

            .e,
            .f {
                isolation: isolate;
                opacity: .63;
            }

            .f {
                fill: rgba(255, 255, 255, .45);
            }
        </style>
        <linearGradient id="b" x1="575.06" y1="-203.6" x2="-15.47" y2="-212.15"
            gradientTransform="translate(0 -58.67) scale(1 -1)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#fff" stop-opacity="0" />
            <stop offset="1" stop-color="#fff" stop-opacity=".75" />
        </linearGradient>
        <linearGradient id="c" x1="546.22" y1="-200.84" x2="-44.31" y2="-209.39"
            gradientTransform="translate(0 -58.67) scale(1 -1)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#fff" stop-opacity="0" />
            <stop offset="1" stop-color="#fff" stop-opacity=".75" />
        </linearGradient>
    </defs>
    <path class="f"
        d="m312.03,6.98h-69.82v1.29h69.82c12.46,0,22.53,10.08,22.53,22.53v236.89c0,12.46-10.08,22.53-22.53,22.53h-66.23v1.29h66.23c13.1,0,23.83-10.65,23.83-23.83V30.81c0-13.1-10.65-23.83-23.83-23.83h0Z" />
    <path class="e"
        d="m90.05,290.22H23.83c-12.46,0-22.53-10.08-22.53-22.53V30.81c0-12.46,10.08-22.53,22.53-22.53h69.82v-1.29H23.83c-13.11,0-23.83,10.72-23.83,23.82v236.89c0,13.1,10.72,23.83,23.83,23.83h66.23v-1.29h0Z" />
    <path class="d"
        d="m123.31,295.12c-1.22,0-2.16-.29-2.88-.87s-1.15-1.44-1.29-2.52h1.15c.07.79.43,1.37.94,1.8s1.22.57,2.09.57c.72,0,1.29-.15,1.66-.43s.57-.72.57-1.22-.15-.87-.36-1.15-.65-.5-1.22-.72l-1.72-.57c-.87-.29-1.51-.65-1.94-1.08s-.65-1.01-.65-1.66c0-.57.15-1.01.43-1.44s.65-.72,1.15-.94,1.08-.36,1.8-.36c1.01,0,1.87.29,2.52.79.65.57,1.01,1.29,1.08,2.31h-1.15c-.15-.72-.36-1.22-.79-1.59-.36-.36-.94-.5-1.66-.5s-1.22.15-1.59.43-.57.65-.57,1.15c0,.43.15.79.43,1.01.29.29.72.5,1.22.65l1.87.65c.79.29,1.44.65,1.8,1.15.43.5.57,1.08.57,1.8,0,.87-.29,1.51-.87,2.02-.65.5-1.51.72-2.59.72h-.02Zm8.13.07c-.72,0-1.29-.15-1.87-.5-.5-.36-.94-.79-1.29-1.37s-.43-1.22-.43-2.02.15-1.44.43-2.02c.29-.57.72-1.01,1.29-1.37.57-.29,1.15-.5,1.87-.5.65,0,1.29.15,1.8.43s.87.72,1.15,1.22c.29.5.43,1.15.43,1.87v.29c0,.07,0,.22-.07.29h-6.05v-.94h5.32l-.36.5c0-.87-.22-1.59-.57-2.02s-.94-.72-1.66-.72-1.29.22-1.72.72-.65,1.15-.65,2.02.22,1.59.65,2.09,1.01.79,1.8.79c.5,0,.87-.07,1.22-.29s.65-.5.79-.87h1.08c-.22.65-.65,1.22-1.22,1.59-.5.57-1.15.79-1.94.79h0v.02Zm5.11-.15v-7.34h1.08v1.72h.07v5.62h-1.15Zm4.97,0v-4.9c0-.57-.15-.94-.36-1.22s-.57-.36-1.08-.36c-.43,0-.87.07-1.22.29s-.65.5-.87.87-.29.79-.29,1.29l-.22-1.72c.22-.57.65-1.01,1.15-1.29s1.01-.5,1.66-.5c.72,0,1.29.22,1.72.65s.65,1.01.65,1.72v5.18h-1.15,0Zm4.97,0v-4.9c0-.57-.15-.94-.36-1.22s-.57-.36-1.08-.36c-.43,0-.87.07-1.22.29s-.65.5-.87.87-.29.79-.29,1.29l-.29-1.72c.22-.57.65-1.01,1.15-1.29s1.08-.5,1.66-.5c.72,0,1.29.22,1.72.65s.65,1.01.65,1.72v5.18h-1.08,0Zm5.32.15c-.79,0-1.37-.22-1.8-.57s-.65-.87-.65-1.51.22-1.15.65-1.51,1.08-.57,1.94-.72l2.59-.43v.94l-2.38.36c-.5.07-.94.22-1.22.43s-.43.5-.43.87.15.65.36.87c.29.22.65.29,1.15.29.65,0,1.15-.15,1.59-.43s.65-.65.65-1.15l.22,1.01c-.15.5-.43.87-.87,1.15s-1.15.43-1.8.43v-.02Zm2.52-.15c-.07-.15-.07-.36-.07-.57v-.79h-.07v-3.53c0-.57-.15-.94-.36-1.22-.29-.29-.65-.36-1.22-.36s-1.01.15-1.37.36-.5.57-.57.94h-1.08c.07-.72.36-1.29.87-1.66.57-.43,1.29-.57,2.16-.57.94,0,1.59.22,2.02.65s.65,1.08.65,1.94v3.53c0,.22,0,.43.07.65,0,.22.07.43.15.72h-1.15v-.07h0v-.02Zm3.16,0v-7.34h1.08v1.72h.07v5.62h-1.15Zm5.25,0v-4.82c0-.57-.15-1.01-.43-1.22s-.72-.43-1.22-.43-.94.07-1.29.29-.65.5-.87.87-.29.79-.29,1.29l-.22-1.72c.22-.57.65-1.01,1.15-1.29s1.08-.5,1.72-.5c.79,0,1.37.22,1.87.65.43.43.72,1.01.72,1.72v5.11l-1.15.07h0Zm2.23-6.41v-1.01h4.82v1.01h-4.82Zm3.88,6.48c-.79,0-1.44-.22-1.8-.57s-.57-.94-.57-1.59v-7.06l1.15-.43v7.41c0,.43.07.72.29.94s.57.29,1.01.29c.22,0,.36,0,.5-.07.15,0,.29-.07.36-.07v1.01c-.07.07-.22.07-.43.07s-.29.07-.5.07h0Zm2.38-9.07v-1.37h1.29v1.37h-1.29Zm.07,9v-7.34h1.15v7.34h-1.15Zm6.34.15c-.65,0-1.29-.15-1.8-.5s-.94-.79-1.22-1.37-.43-1.22-.43-2.02c0-.72.15-1.37.43-1.94s.72-1.01,1.22-1.37,1.08-.5,1.8-.5c.57,0,1.01.07,1.44.29s.79.5,1.08.87.43.87.57,1.37h-1.08c-.07-.5-.29-.87-.65-1.15s-.79-.43-1.37-.43c-.5,0-.87.15-1.22.36s-.65.57-.79,1.01c-.22.43-.29.94-.29,1.51s.07,1.08.29,1.51c.22.43.43.79.79,1.01s.79.36,1.22.36c.5,0,.94-.15,1.29-.43s.57-.65.65-1.15h1.08c-.07.5-.29.94-.57,1.37-.29.36-.65.72-1.08.87-.36.22-.79.36-1.37.36h0Zm7.78-.15v-10.37h1.15v10.37h-1.15Zm.57,0v-1.01h5.9v1.01h-5.9Zm9.43.15c-.79,0-1.37-.22-1.8-.57s-.65-.87-.65-1.51.22-1.15.65-1.51,1.08-.57,1.94-.72l2.59-.43v.94l-2.38.36c-.5.07-.94.22-1.22.43s-.43.5-.43.87.15.65.36.87c.29.22.65.29,1.15.29.65,0,1.15-.15,1.59-.43s.57-.65.57-1.15l.22,1.01c-.15.5-.43.87-.87,1.15s-1.08.43-1.72.43v-.02Zm2.52-.15c-.07-.15-.07-.36-.07-.57v-.79h-.07v-3.53c0-.57-.15-.94-.36-1.22-.29-.29-.65-.36-1.22-.36s-1.01.15-1.29.36c-.36.22-.5.57-.57.94h-1.08c.07-.72.36-1.29.87-1.66.57-.43,1.29-.57,2.16-.57.94,0,1.59.22,2.02.65s.65,1.08.65,1.94v3.53c0,.22,0,.43.07.65,0,.22.07.43.15.72h-1.22v-.07l-.02-.02Zm5.25.07l-3.31-7.41h1.29l2.81,6.62-.79.79h0Zm-1.8,2.88l1.66-3.81.29-.43,2.38-6.05h1.15l-4.25,10.29h-1.22Zm9.72-2.81c-.72,0-1.29-.15-1.87-.5-.5-.36-.94-.79-1.29-1.37s-.43-1.22-.43-2.02.15-1.44.43-2.02.72-1.01,1.29-1.37c.57-.29,1.15-.5,1.87-.5.65,0,1.29.15,1.8.43s.87.72,1.15,1.22.43,1.15.43,1.87v.29c0,.07,0,.22-.07.29h-6.05v-.94h5.32l-.36.5c0-.87-.22-1.59-.57-2.02s-.94-.72-1.66-.72-1.29.22-1.72.72-.65,1.15-.65,2.02.22,1.59.65,2.09c.43.5,1.01.79,1.8.79.5,0,.87-.07,1.22-.29s.65-.5.79-.87h1.08c-.22.65-.65,1.22-1.22,1.59-.57.57-1.22.79-1.94.79h0v.02Zm5.11-.15v-7.34h1.08v1.87h.07v5.47h-1.15Zm1.15-3.81l-.22-1.72c.15-.65.5-1.08.94-1.44s.94-.5,1.51-.5c.22,0,.43,0,.5.07v1.08h-.5c-.72,0-1.29.22-1.66.65-.36.36-.57,1.01-.57,1.87h0Z" />
    <path class="d"
        d="m125.17,10.44V.07h1.15v10.37h-1.15Zm.57-9.36V.07h5.97v1.01s-5.97,0-5.97,0Zm0,4.9v-1.08h5.62v1.01h-5.62v.07h0Zm7.63-4.53V.07h1.29v1.37s-1.29,0-1.29,0Zm.07,9V3.09h1.15v7.34h-1.15Zm7.06.07c-.72,0-1.29-.15-1.72-.5s-.79-.79-.94-1.44h.15v1.8h-1.08V0h1.15v4.75l-.15-.07c.22-.57.5-1.01,1.01-1.37.5-.29,1.08-.5,1.72-.5s1.22.15,1.72.5c.5.29.87.79,1.15,1.29.29.57.43,1.22.43,2.02s-.15,1.44-.43,2.02c-.29.57-.65,1.01-1.15,1.37-.57.36-1.15.5-1.87.5h0Zm-.15-.94c.72,0,1.29-.29,1.72-.72.43-.5.65-1.22.65-2.09s-.22-1.51-.65-2.02-1.01-.72-1.72-.72-1.29.22-1.72.72-.65,1.22-.65,2.09.22,1.51.65,2.02c.43.43,1.01.72,1.72.72Zm8.28,1.01c-.72,0-1.29-.15-1.87-.5s-.94-.79-1.29-1.37-.43-1.22-.43-2.02.15-1.44.43-2.02c.29-.57.72-1.01,1.29-1.37.57-.29,1.15-.5,1.87-.5.65,0,1.29.15,1.8.43s.87.72,1.15,1.22.43,1.15.43,1.87v.29c0,.07,0,.22-.07.29h-6.05v-.94h5.32l-.36.5c0-.87-.22-1.59-.57-2.02s-.94-.72-1.66-.72-1.29.22-1.8.72-.65,1.15-.65,2.02.22,1.59.65,2.09,1.08.79,1.8.79c.5,0,.87-.07,1.22-.29s.65-.5.79-.87h1.08c-.22.65-.65,1.22-1.22,1.59-.5.57-1.15.79-1.87.79v.02Zm5.11-.15V3.09h1.08v1.87h.07v5.47h-1.15Zm1.15-3.88l-.22-1.72c.15-.65.5-1.08.94-1.44s.94-.5,1.51-.5c.22,0,.43,0,.5.07v1.08h-.5c-.72,0-1.29.22-1.66.65-.43.43-.57,1.08-.57,1.87h0Zm6.84-1.01v-1.01h5.9v1.01h-5.9Zm2.44,2.66V1.94h1.01v6.26h-1.01Zm7.71,2.23L175.92.07h1.01l-3.88,10.37h-1.16Zm2.02-4.25h5.4v1.01h-5.4v-1.01Zm6.26,4.25L176.28.07h1.08l4.03,10.37h-1.23Zm7.78,2.95v-4.68l.22.07c-.22.57-.5,1.01-1.01,1.29-.5.36-1.08.5-1.72.5s-1.22-.15-1.72-.5c-.5-.29-.87-.72-1.15-1.29s-.43-1.22-.43-2.02.15-1.44.43-2.02c.29-.57.65-1.01,1.15-1.37.5-.29,1.08-.5,1.72-.5.72,0,1.29.15,1.72.5s.79.79.94,1.44h-.15v-1.8h1.08v10.29l-1.08.07h0v.03Zm-2.31-3.81c.72,0,1.29-.22,1.72-.72s.65-1.22.65-2.09-.22-1.51-.65-2.02c-.43-.5-1.01-.72-1.72-.72s-1.29.22-1.72.72-.65,1.22-.65,2.09.22,1.51.65,2.02c.43.43,1.01.72,1.72.72Zm8.13,1.01c-.5,0-.94-.07-1.29-.29s-.65-.5-.87-.87-.29-.79-.29-1.22V3.09h1.15v4.82c0,.57.15,1.01.43,1.22s.65.43,1.15.43c.43,0,.87-.07,1.22-.29s.65-.5.87-.87.29-.79.29-1.29l.22,1.72c-.22.57-.65,1.01-1.15,1.29s-1.08.43-1.72.43h0Zm2.74-.15v-1.72h-.07V3.09h1.15v7.34h-1.08v-.02Zm5.25.15c-.79,0-1.37-.22-1.8-.57s-.65-.87-.65-1.51.22-1.15.65-1.51,1.08-.57,1.94-.72l2.59-.43v.94l-2.38.36c-.5.07-.94.22-1.22.43s-.43.5-.43.87.15.65.36.87.65.29,1.15.29c.65,0,1.15-.15,1.59-.43s.57-.65.57-1.15l.22,1.01c-.15.5-.43.87-.87,1.15-.5.29-1.08.43-1.72.43v-.02Zm2.52-.15c-.07-.15-.07-.36-.07-.57v-.79h-.07v-3.53c0-.57-.15-.94-.36-1.22-.29-.29-.65-.36-1.22-.36s-1.01.15-1.29.36c-.36.22-.5.57-.57.94h-1.08c.07-.72.36-1.29.87-1.66.57-.43,1.29-.57,2.16-.57.94,0,1.59.22,2.02.65.43.43.65,1.08.65,1.94v3.53c0,.22,0,.43.07.65,0,.22.07.43.15.72h-1.22v-.07h0l-.02-.02Z" />
</svg>
`;

const B2 = () => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: svgWithStyles }}
      style={{
        width: "100%",
        color: "white",
      }}
    />
  );
};

export default B2;
