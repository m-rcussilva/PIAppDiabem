import { useEffect, useState } from "react"
import styles from "./Form.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Form() {
    let navigate = useNavigate()

    const [user, setUser] = useState({
        name: "",
        age: "",
        weight: "",
        height: "",
        date: "",
        hour: "",
        glicose: ""
    })

    const { name, age, weight, height, date, hour, glicose } = user

    // Atualiza o estado de um obj 'user'
    // O spread opeartor '...' cria um cópia do obj
    const generateReport = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        const userToCreate = {
            name,
            age: parseInt(age),
            weight: parseFloat(weight),
            height: parseFloat(height),
            // date,
            // hour,
            glucose: parseFloat(glicose)
        }

        await axios.post("http://localhost:8080/createuser", userToCreate)
        navigate("/oldresults")
    }

    return (
        <div>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className={styles.FormContainer}>
                    <div className={styles.FormLeft}>
                        <p>Dados pessoais</p>

                        <input
                            type="text"
                            placeholder="Nome"
                            className={styles.FormInput}
                            name="name"
                            value={name}
                            onChange={(e) => generateReport(e)}
                        />
                        <input
                            type="text"
                            placeholder="Idade"
                            className={styles.FormInput}
                            name="age"
                            value={age}
                            onChange={(e) => generateReport(e)}
                        />
                        <input
                            type="text"
                            placeholder="Peso (kg)"
                            className={styles.FormInput}
                            name="weight"
                            value={weight}
                            onChange={(e) => generateReport(e)}
                        />
                        <input
                            type="text"
                            placeholder="Altura (cm)"
                            className={styles.FormInput}
                            name="height"
                            value={height}
                            onChange={(e) => generateReport(e)}
                        />
                    </div>

                    <div className={styles.FormRight}>
                        <p>Glicemia</p>

                        <input
                            type="text"
                            placeholder="Data"
                            className={styles.FormInput}
                            name="date"
                            value={date}
                            onChange={(e) => generateReport(e)}
                        />
                        <input
                            type="text"
                            placeholder="Hora"
                            className={styles.FormInput}
                            name="hour"
                            value={hour}
                            onChange={(e) => generateReport(e)}
                        />
                        <input
                            type="text"
                            placeholder="Glicemia"
                            className={styles.FormInput}
                            name="glicose"
                            value={glicose}
                            onChange={(e) => generateReport(e)}
                        />

                        <button type="submit">Gerar relatórios</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form
