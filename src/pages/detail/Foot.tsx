import { DetailProps } from "./Head";
import DOMPurify from 'dompurify';  // Add DOMPurify to sanitize HTML

const Foot = ({ data }: DetailProps) => {
    return (
        <div>
            <div className="flex flex-col gap-2 text-white">
                <div className="flex gap-2">
                    <button className="bg-black flex-1 p-4 rounded-lg">
                        Sepete Ekle
                    </button>

                    <button className="bg-black p-4 rounded-lg">
                        <img src="/heart.svg" alt="Heart Icon" />
                    </button>
                </div>

                <button className="bg-blue p-4 rounded-lg">Hemen Satın Al</button>
            </div>

            <div>
                <h2 className="font-semibold mt-8 mb-2 text-[24px] text-gray-dark">
                    Bu ürün hakkında
                </h2>

                {/* Rendering sanitized HTML content */}
                <p
                    className="font-open text-[20px] text-gray-dark"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.description) }}
                ></p>
            </div>
        </div>
    );
};

export default Foot;