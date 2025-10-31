import React, { useState } from 'react';

const steps = [
    { label: '1.5 tháng', subLabel: 'IELTS 0.0 - 2.0', color: '#E74C3C' },
    { label: '2 tháng', subLabel: 'IELTS 2.0 - 3.0', color: '#F39C12' },
    { label: '2.5 tháng', subLabel: 'IELTS 3.0 - 4.0', color: '#2980B9' },
    { label: '2.5 tháng', subLabel: 'IELTS 4.0 - 5.0', color: '#3498DB' },
    { label: '2.5 tháng', subLabel: 'IELTS 5.0 - 6.0', color: '#9B59B6' },
    { label: '1 tháng', subLabel: 'IELTS 6.0 - 6.5', color: '#8E44AD' },
    { label: '2.5 tháng', subLabel: 'IELTS 6.5 - 7.0', color: '#FF69B4' },
    { label: '2 tháng', subLabel: 'IELTS 7.0 - 7.5+', color: '#2ECC71' },
];

const stepContents = [
    {
        duration: "1.5 tháng",
        target: [
            "Người mới bắt đầu hoàn toàn",
            "Chưa biết gì về IELTS",
            "Muốn làm quen với kỹ năng nghe – nói cơ bản"
        ],
        result: [
            "Đạt IELTS 0.0 - 2.0",
            "Hiểu cấu trúc bài thi cơ bản",
            "Xây dựng nền tảng từ vựng"
        ]
    },
    {
        duration: "2 tháng",
        target: [
            "Người đã học cơ bản",
            "Muốn cải thiện kỹ năng nghe – nói",
            "Cần làm quen với kỹ năng đọc cơ bản"
        ],
        result: [
            "Đạt IELTS 2.0 - 3.0",
            "Nắm các chiến lược làm bài cơ bản",
            "Tăng vốn từ vựng và ngữ pháp"
        ]
    },
    {
        duration: "2.5 tháng",
        target: [
            "Học sinh đã biết nghe – nói cơ bản",
            "Muốn phát triển kỹ năng đọc – viết",
            "Cần luyện tập kỹ năng từ vựng nâng cao"
        ],
        result: [
            "Đạt IELTS 3.0 - 4.0",
            "Cải thiện tốc độ đọc hiểu",
            "Viết được đoạn văn ngắn cơ bản"
        ]
    },
    {
        duration: "2.5 tháng",
        target: [
            "Người muốn đạt 4.0 – 5.0",
            "Cần nâng cao kỹ năng làm bài nghe – đọc",
            "Chuẩn bị cho các kỹ năng viết cơ bản"
        ],
        result: [
            "Đạt IELTS 4.0 - 5.0",
            "Viết đoạn văn 5-6 câu rõ ràng",
            "Nghe hiểu các câu đơn giản"
        ]
    },
    {
        duration: "2.5 tháng",
        target: [
            "Muốn đạt IELTS 5.0 6.0",
            "Cần luyện tập nghe  đọc nâng cao",
            "Muốn cải thiện kỹ năng viết luận"
        ],
        result: [
            "Đạt IELTS 5.0 - 6.0",
            "Viết được đoạn văn 8-10 câu",
            "Đọc hiểu các bài dài hơn"
        ]
    },
    {
        duration: "1 tháng",
        target: [
            "Học sinh đã có nền tảng 6.0",
            "Cần luyện thi tập trung",
            "Cải thiện điểm kỹ năng yếu"
        ],
        result: [
            "Đạt IELTS 6.0 - 6.5",
            "Tăng điểm nghe và đọc",
            "Viết luận cơ bản tốt hơn"
        ]
    },
    {
        duration: "2.5 tháng",
        target: [
            "Người muốn đạt 6.5 – 7.0",
            "Cần luyện kỹ năng viết nâng cao",
            "Cải thiện phát âm và ngữ pháp"
        ],
        result: [
            "Đạt IELTS 6.5 - 7.0",
            "Viết được bài luận có cấu trúc tốt",
            "Nghe hiểu các bài phức tạp"
        ]
    },
    {
        duration: "2 tháng",
        target: [
            "Người muốn đạt 7.0 – 7.5+",
            "Cần luyện thi nâng cao",
            "Muốn cải thiện điểm toàn diện"
        ],
        result: [
            "Đạt IELTS 7.0 - 7.5+",
            "Viết luận rõ ràng, mạch lạc",
            "Nghe, đọc, nói đạt trình độ cao"
        ]
    },
];


const StudyPathArrow: React.FC = () => {
    const [activeStep, setActiveStep] = useState<number>(0);
    const [displayStep, setDisplayStep] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleStepClick = (idx: number) => {
        if (idx === activeStep) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveStep(idx);
            setIsTransitioning(false);
        }, 300);
    };

    return (
        <div className="flex flex-col space-x-0 p-4 mt-9">
            <div className='flex flex-col justify-center items-center '>
                <h1 className='text-black text-4xl'>Chi tiết lộ trình học</h1>
                <h2 className='text-gray-400'>Lựa chọn khóa học theo đúng lộ trình học tập và linh hoạt thời gian học theo nhu cầu</h2>
            </div>

            {/* Step arrow */}
            <div className='flex space-x-0 overflow-x-auto p-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 justify-center items-center'>
                {steps.map((step, idx) => (
                    <div
                        key={idx}
                        onClick={() => handleStepClick(idx)}
                        className={`flex-none px-10 py-4 text-white font-semibold relative transition-transform duration-300 hover:translate-x-4 cursor-pointer
                            ${activeStep === idx ? 'ring-4 ring-yellow-300' : ''}`}
                        style={{
                            backgroundColor: step.color,
                            clipPath:
                                idx === 0
                                    ? 'polygon(10% 0, 100% 0, 90% 50%, 100% 100%, 10% 100%, 0 50%)'
                                    : idx === steps.length - 1
                                        ? 'polygon(10% 0, 100% 0, 90% 50%, 100% 100%, 10% 100%, 0 50%)'
                                        : 'polygon(10% 0, 100% 0, 90% 50%, 100% 100%, 10% 100%, 0 50%)',
                        }}
                    >
                        <div className="flex flex-col items-center justify-center text-center">
                            <span>{step.label}</span>
                            <span className="text-xs">{step.subLabel}</span>
                        </div>
                    </div>
                ))}
            </div>


            <div className="mt-6 flex gap-8 justify-center px-12">
                {/* 🔹 Cột bên trái (Đối tượng học) — nhỏ hơn */}
                <div
                    className={`flex-[0.8] p-4 rounded text-white transition-all duration-300 ease-in-out 
        ${isTransitioning ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}
                    style={{ backgroundColor: steps[activeStep].color }}
                >
                    <div className="text-center mb-2">
                        <h3 className="font-semibold text-2xl text-white">Đối tượng học</h3>
                        <hr className="border-t border-white mt-2" />
                    </div>

                    <div className="p-5 bg-customboldWhite rounded-sm mt-4">
                        <ul className="list-none text-white">
                            {stepContents[activeStep].target.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 🔹 Cột bên phải (Kết quả đạt được) — lớn hơn */}
                <div
                    className={`flex-[1.2] p-4 rounded text-white transition-all duration-300 ease-in-out 
        ${isTransitioning ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}
                    style={{ backgroundColor: steps[activeStep].color }}
                >
                    <div className="text-center mb-2">
                        <h3 className="font-semibold text-2xl">Kết quả đạt được</h3>
                    </div>
                    <hr className="border-t border-white mt-2" />

                    <div className="p-5 bg-customboldWhite rounded-sm mt-4">
                        <ul className="list-none text-white">
                            {stepContents[activeStep].result.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudyPathArrow;
