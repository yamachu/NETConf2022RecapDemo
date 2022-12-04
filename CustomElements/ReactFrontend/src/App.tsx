import React, { useState } from "react";

export const App: React.FC = () => {
  const [nextCounterIndex, setNextCounterIndex] = useState(1);
  const [blazorCounters, setBlazorCounters] = useState<
    { title: string; incrementAmount: number }[]
  >([]);
  const addBlazorCounter = () => {
    const index = nextCounterIndex;
    setNextCounterIndex(index + 1);
    setBlazorCounters(
      blazorCounters.concat([
        {
          title: `Counter ${index}`,
          incrementAmount: index,
        },
      ])
    );
  };
  const removeBlazorCounter = () => {
    setBlazorCounters(blazorCounters.slice(0, -1));
  };

  return (
    <div>
      <p>
        <button onClick={addBlazorCounter}>Add Blazor counter</button> &nbsp;
        <button onClick={removeBlazorCounter}>Remove Blazor counter</button>
      </p>

      {blazorCounters.map((counter) => (
        <div key={counter.title}>
          {/* 実際に呼び出すには、Blazor WebAssemblyの初期化が終了しているかチェックする必要がある */}
          <blazor-counter
            title={counter.title}
            increment-amount={counter.incrementAmount}
          ></blazor-counter>
        </div>
      ))}
    </div>
  );
};
