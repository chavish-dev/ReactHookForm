
import { useState } from "react"
import { useForm } from "react-hook-form"

const User = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const Submit = (data) => {
        debugger
    }
    const myAlert = () => {
        alert("alert")
    }

    return (
        <>

            <button onClick={myAlert}>
                alert
            </button>
            <form onSubmit={handleSubmit(Submit)}>

                <input defaultValue="test" {...register("example")} />

                <input {...register("exampleRequired", { required: true })} />

                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>

        </>
    )
}

export default User