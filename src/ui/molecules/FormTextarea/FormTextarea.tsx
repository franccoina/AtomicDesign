import React from "react";
import Label from "@/ui/atoms/Label/Label";
import Textarea from "@/ui/atoms/Textarea/Textarea";
import { ITextAreaProps } from "@/ui/atoms/Textarea/Textarea";
import { ILabelProps } from "@/models/atoms/Label";

export interface IFormTextareaProps extends ILabelProps, ITextAreaProps {

}

const FormTextarea: React.FC<IFormTextareaProps> = ({ text, htmlFor, className, placeholder,
    key, name, value, onChange, id }) => {
    return (
        <div key={key} className={className}>
            <Label htmlFor={htmlFor} text={text}></Label>
            <Textarea placeholder={placeholder} name={name} value={value} onChange={onChange} id={id} />
        </div>
    );
};

export default FormTextarea;