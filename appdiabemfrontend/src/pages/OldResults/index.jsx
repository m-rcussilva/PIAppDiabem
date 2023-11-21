import { useEffect, useState } from "react"
import styles from "./OldResults.module.css"
import axios from "axios"
import { Link } from "react-router-dom"
import { MdArrowBackIos } from "react-icons/md"

function OldResults() {
    const [user, setUser] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:8080/glucose-results")
            .then((response) => {
                setUser(response.data)
            })
            .catch((error) => {
                console.error("Error ao carregar dados: ", error)
            })
    }, [])

    return (
        <div>
            <table className={styles.OldResultsTable}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Idade</th>
                        <th scope="col">Peso</th>
                        <th scope="col">Altura</th>
                        <th scope="col">Data</th>
                        <th scope="col">Hora</th>
                        <th scope="col">Glicemia</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((item, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td className={styles.Tablecell}>{item.name}</td>
                            <td className={styles.Tablecell}>{item.age}</td>
                            <td className={styles.Tablecell}>{item.weight}</td>
                            <td className={styles.Tablecell}>{item.height}</td>
                            <td className={styles.Tablecell}>{item.date}</td>
                            <td className={styles.Tablecell}>{item.hour}</td>
                            <td className={styles.Tablecell}>{item.glicose}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div>
                <Link to="/" className={styles.BackToHomePageButton}>
                    <MdArrowBackIos /> <span>Voltar</span>
                </Link>
            </div>
        </div>
    )
}

export default OldResults
