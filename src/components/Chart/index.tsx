import React, { useEffect, useRef } from "react";
import Chart, { ChartOptions } from "chart.js/auto";
import { ChartType } from "@/type";
import { calculateAveragePoint, extractMapData } from "@/lib/utils";

function ChartJS({ data, chartType }: ChartType) {
  const chartContainer = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart>();
  const chartData = calculateAveragePoint(data);
  const { labels, values } = extractMapData(chartData);

  useEffect(() => {
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Тухай жилийн дундаж дүнгийн тооцоолол",
          data: values,
          fill: false,
          backgroundColor:
            chartType === "bar"
              ? [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                  "rgba(255, 205, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(201, 203, 207, 0.2)",
                ]
              : [],
          borderColor:
            chartType === "bar"
              ? [
                  "rgb(255, 99, 132)",
                  "rgb(255, 159, 64)",
                  "rgb(255, 205, 86)",
                  "rgb(75, 192, 192)",
                  "rgb(54, 162, 235)",
                  "rgb(153, 102, 255)",
                  "rgb(201, 203, 207)",
                ]
              : "rgb(75, 192, 192)",

          borderWidth: 1,
        },
      ],
    };

    if (chartInstance.current !== undefined) {
      chartInstance.current.destroy();
    }

    if (chartContainer.current) {
      const ctx = chartContainer.current.getContext("2d");
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: chartType === "line" ? "line" : "bar",
          data: data,
          options: {} as ChartOptions,
        });
      }
    }

    return () => {
      if (chartInstance.current !== undefined) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
}

export default ChartJS;
