import { useEffect } from "react";
import { Canvas, CanvasEvent, Text } from "@antv/g";
import { Renderer } from "@antv/g-canvas";

const Map = () => {
  useEffect(() => {
    const renderer = new Renderer({
      enableDirtyRectangleRenderingDebug: true,
      enableAutoRendering: true,
      enableDirtyRectangleRendering: true,
    });
    const canvas = new Canvas({
      container: "container",
      width: 1000,
      height: 1000,
      renderer,
    });

    const text = new Text({
      style: {
        text: "abcde",
        fill: "red",
        x: 10,
        y: 10,
      },
    });

    canvas.addEventListener(CanvasEvent.READY, () => {
      canvas.appendChild(text);
    });
    canvas.addEventListener(CanvasEvent.BEFORE_RENDER, () => {
      console.log(111);
    });
  }, []);
  return <div id="container" />;
};

export default Map;
