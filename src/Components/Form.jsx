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
        <div className="md:w-full md:flex md:flex-row flex-col   justify-center">
            <form className="md:flex md:flex-row flex-col  md:gap-10 " onSubmit={handleSubmit(datahandler)}>
                <input
                    placeholder="name"
                    type="text"
                    {...register('name')}
                    className="py-1 px-3 bg-white rounded-md my-5 md:mt-0 outline-none"
                />
                <input
                    placeholder="email"
                    type="text"
                    {...register('email')}
                    className="py-1 px-3 bg-white rounded-md my-5 md:mt-0 outline-none"
                />
                <input
                    placeholder="image"
                    type="text"
                    {...register('image')}
                    className="py-1 px-3 bg-white rounded-md my-5 md:mt-0 outline-none"
                />
                <input
                    type="submit"
                    className="font-semibold text-sm bg-purple-600 my-2 md:mt-0 rounded-md text-white py-1 px-3 cursor-pointer"
                />
            </form>
        </div>
    );
}

export default Form;
