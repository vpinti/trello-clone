"use client";

import { useAction } from "@/hooks/use-action";
import { createBoard } from "@/actions/create-board";
import { FormInput } from "@/components/form/form-input";

import { FormButton } from "./form-button";
import FormSubmit from "@/components/form/form-submit";

const Form = () => {
    const { execute, fieldErrors } = useAction(createBoard, {
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (error) => {
            console.log(error)
        }
    });

    const onSubmit = (formData: FormData) => {
        const title = formData.get("title") as string;
        execute({ title });
    }

    return (
        <form action={onSubmit}>
            <div className="flex flex-col space-y-2">
                <FormInput
                    label="Board Title"
                    id="title"
                    errors={fieldErrors}
                />
            </div>
            <FormSubmit>
                Save
            </FormSubmit>
        </form>
    );
};

export default Form;
