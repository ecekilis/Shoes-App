import { useEffect } from "react";
import { FilterProps } from "./size";
import { useSearchParams } from "react-router-dom";
import { colors } from "../../utils/constants";

const Color = ({ selected, setSelected }: FilterProps) => {
    const [params, setParams] = useSearchParams();


    useEffect(() => {
        if (selected.length > 0) {

            params.set("color", selected.join(","));
        } else {

            params.delete("color");
        }


        setParams(params);
    }, [selected]);


    const toggle = (num: string) => {
        const found = selected.includes(num);

        if (!found) {
            setSelected([...selected, num]);
        } else {
            setSelected(selected.filter((i) => i !== num));
        }
    };

    return (
        <div className="lg:mt-5">
            <h2 className="mb-4 font-semibold">Renk</h2>

            <div className="grid grid-cols-5 gap-4">
                {colors.map((color) => {
                    // numara seçili mi?
                    const found = selected.includes(color.id);

                    return (
                        <p
                            onClick={() => toggle(color.id)}
                            style={{ background: color.code }}
                            className={`py-2 px-4 lg:px-0 text-center rounded-md cursor-pointer transition hover:bg-zinc-400 bg-white text-transparent select-none ${found ? "ring-[4px]" : ""
                                }`}
                        >
                            .
                        </p>
                    );
                })}
            </div>
        </div>
    );
};

export default Color;