import React from "react";

/**
 * Hook personalizado para obter as dimensões da tela e pontos de breakpoints.
 * @returns {{
*   pageWidth: number;
*   pageHeight: number;
*   isSm: boolean;
*   isXl: boolean;
* }} Retorna as dimensões da tela e booleanos indicando os breakpoints.
*/
export const useViewport = () => {
  const [pageWidth, setPageWidth] = React.useState<number>(window.innerWidth);
  const [pageHeight, setPageHeight] = React.useState<number>(
    window.innerHeight
  );

  React.useEffect(() => {
    const handleResize = () => {
      setPageWidth(window.innerWidth);
      setPageHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    pageWidth,
    pageHeight,
    isSm: pageWidth <= 770,
    isXl: pageWidth > 770,
  };
};