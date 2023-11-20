import { useEffect, useState } from "react"
import styles from "./Form.module.css"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { parseISO, format } from "date-fns"
import Chart from "react-google-charts"

function Form() {
    const [user, setUser] = useState({
        name: "",
        age: "",
        weight: "",
        height: "",
        date: "",
        hour: "",
        glicose: ""
    })

    const [submittedUser, setSubmittedUser] = useState(null)

    const { name, age, weight, height, date, hour, glicose } = user

    const generateReport = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const userToCreate = {
                name,
                age: parseInt(age),
                weight: parseFloat(weight),
                height: parseFloat(height),
                date: date ? format(parseISO(date), "dd/MM/yyyy") : null,
                hour: hour,
                glicose: parseFloat(glicose)
            }

            setSubmittedUser(userToCreate)

            await axios.post("http://localhost:8080/createuser", userToCreate)
        } catch (error) {
            console.error("Erro na requisição:", error)

            if (error.response) {
                console.log("Resposta de erro:", error.response.data)
            }
        }
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
                            type="number"
                            placeholder="Idade"
                            className={styles.FormInput}
                            name="age"
                            value={age}
                            onChange={(e) => generateReport(e)}
                        />
                        <input
                            type="number"
                            placeholder="Peso (kg)"
                            className={styles.FormInput}
                            name="weight"
                            value={weight}
                            onChange={(e) => generateReport(e)}
                        />
                        <input
                            type="number"
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
                            type="date"
                            placeholder="Data"
                            className={styles.FormInput}
                            name="date"
                            value={date}
                            onChange={(e) => generateReport(e)}
                        />
                        <input
                            type="time"
                            placeholder="Hora"
                            className={styles.FormInput}
                            name="hour"
                            value={hour}
                            onChange={(e) => generateReport(e)}
                        />
                        <input
                            type="number"
                            placeholder="Glicose"
                            className={styles.FormInput}
                            name="glicose"
                            value={glicose}
                            onChange={(e) => generateReport(e)}
                        />

                        <button type="submit" className={styles.SubmitButton}>
                            Gerar relatórios
                        </button>
                    </div>
                </div>
            </form>

            <div>
                <h3>
                    O{" "}
                    <span className={styles.GraphNameStyle}>
                        Gráfico de Nível de Açucar no Sangue
                    </span>{" "}
                    será mostrado aqui em baixo após você submeter os dados:
                </h3>
            </div>

            {submittedUser && (
                <div>
                    <h2>Gráfico de Nível de Açucar no Sangue:</h2>
                    <Chart
                        width={"100%"}
                        height={"400px"}
                        chartType="ColumnChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ["Categoria", "Valor"],
                            ["Idade", submittedUser.age],
                            ["Glicose", submittedUser.glicose]
                        ]}
                        options={{
                            title: "Idade e Glicose",
                            chartArea: { width: "50%" },
                            hAxis: {
                                title: "Valor",
                                minValue: 0
                            },
                            vAxis: {
                                title: "Categoria"
                            }
                        }}
                    />
                </div>
            )}

            <h4>
                Ir para:{" "}
                <Link to={"/oldresults"}>
                    Histórico de Resultados Anteriores
                </Link>
            </h4>
        </div>
    )
}

export default Form
