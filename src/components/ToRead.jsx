import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

class TrafficConeBarElement extends BarElement {
    draw() {
        const { ctx, x, y, base, width, height } = this.getProps(['x', 'y', 'base', 'width', 'height'], true);

        const baseWidth = 50;
        const topWidth = 0;
        const halfBaseWidth = baseWidth / 2;
        const pointyHeight = height;

        ctx.beginPath();
        ctx.moveTo(x - halfBaseWidth, y + pointyHeight);
        ctx.lineTo(x, y);
        ctx.lineTo(x + halfBaseWidth, y + pointyHeight);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(x - baseWidth / 2, 0, x + baseWidth / 2, 0);
        gradient.addColorStop(0, 'rgba(0, 128, 255, 0.7)');
        gradient.addColorStop(1, 'rgba(0, 0, 128, 0.7)');
        ctx.fillStyle = gradient;
        ctx.fill();

        if (this.options.borderWidth > 0) {
            ctx.lineWidth = this.options.borderWidth;
            ctx.strokeStyle = this.options.borderColor || '#000';
            ctx.stroke();
        }
    }
}

const ToRead = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('/books.json');
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    const chartData = {
        labels: books.map((book) => book.name),
        datasets: [
            {
                label: 'Number of Pages',
                data: books.map((book) => book.pages),
                backgroundColor: books.map(() => `hsl(${Math.random() * 360}, 100%, 70%)`),
                borderColor: 'rgba(0, 0, 0, 0.5)',
                borderWidth: 2,
                borderRadius: 0,
                barThickness: 50,
                barPercentage: 1.0,
                categoryPercentage: 1.0,
                customBarElement: TrafficConeBarElement,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false, // Ensures that the chart maintains aspect ratio
        scales: {
            x: {
                title: { display: true, text: 'Books' },
            },
            y: {
                title: { display: true, text: 'Pages' },
                beginAtZero: true,
            },
        },
        plugins: {
            legend: { position: 'top' },
        },
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-6">Books vs Pages</h1>
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl mx-auto">
                {books.length > 0 ? (
                    <div className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
                        <Bar data={chartData} options={chartOptions} />
                    </div>
                ) : (
                    <p className="text-gray-500">Loading chart...</p>
                )}
            </div>
        </div>
    );
};

export default ToRead;
