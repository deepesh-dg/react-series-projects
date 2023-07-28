import React from "react";

function ProgressBar({ value = 0, setValue, maxValue }) {
    // const barRef = useRef(null);

    // useEffect(() => {
    //     const bar = barRef.current;
    //     let isDraggable = false;
    //     let mouseStartPos = 0;
    //     let translate = 0;

    //     const handleMouseDown = (e) => {
    //         isDraggable = true;
    //         mouseStartPos = e.clientX;
    //     };

    //     const handleMouseUp = (e) => {
    //         isDraggable = false;
    //         if (translate <= 100) {
    //             translate = mouseStartPos - e.clientX;
    //             console.log(translate);
    //         }
    //     };

    //     const handleMouseMove = (e) => {
    //         if (isDraggable) {
    //         }
    //     };

    //     bar?.addEventListener("mousedown", handleMouseDown);
    //     bar?.addEventListener("mouseup", handleMouseUp);
    //     document.addEventListener("mousemove", handleMouseMove);

    //     return () => {
    //         bar?.removeEventListener("mousedown", handleMouseDown);
    //         bar?.removeEventListener("mouseup", handleMouseUp);
    //         document.removeEventListener("mousemove", handleMouseMove);
    //     };
    // }, []);

    return (
        <input
            type="range"
            min={0}
            max={maxValue}
            step={1}
            className="w-full cursor-pointer"
            value={value.toString()}
            onChange={(e) => setValue(Number(e.target.value))}
        />
    );

    // return (
    //     <div className="w-full h-1 bg-gray-300 relative rounded-full" ref={barRef}>
    //         <span
    //             className="inline-flex justify-end absolute inset-y-0 left-0 bg-red-500 rounded-full"
    //             style={{ width: `${width}%` }}
    //         >
    //             <span className="inline-block rounded-full w-4 h-4 bg-white border shadow translate-x-1/2 -translate-y-1.5 shrink-0"></span>
    //         </span>
    //     </div>
    // );
}

export default ProgressBar;
