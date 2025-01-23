import React, { useRef } from "react";
import { useForm } from "react-hook-form";

function Form({userhandler}) {
    const name = useRef(null);
    const email = useRef(null);
    const img = useRef(null);
    const { register, handleSubmit, reset } = useForm()
    const datahandler = (data) =>{
    userhandler(data)
    reset()
    }
    return (
        <div className="w-full flex justify-center">
            <form className="flex gap-10 " onSubmit={handleSubmit(datahandler)}>
                <input
                    placeholder="name"
                    type="text"
                    {...register('name')}
                    className="py-1 px-3 bg-white rounded-md outline-none"
                />
                <input
                    placeholder="email"
                    type="text"
                    {...register('email')}
                    className="py-1 px-3 bg-white rounded-md outline-none"
                />
                <input
                    placeholder="image"
                    type="text"
                    {...register('image')}
                    className="py-1 px-3 bg-white rounded-md outline-none"
                />
                <input
                    type="submit"
                    className="font-semibold text-sm bg-purple-600 rounded-md text-white py-1 px-3 cursor-pointer"
                />
            </form>
        </div>
    );
}

export default Form;
