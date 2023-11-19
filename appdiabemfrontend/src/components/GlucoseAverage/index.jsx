import styles from "./GlucoseAverage.module.css"

function GlucoseAverage() {
    return (
        <div className={styles.GlucoseAverageContainer}>
            <h3>Média de glicemia</h3>
            <ul>
                <li>Glicemia de jejum normal: inferior a 99 mg/dL</li>
                <li>Glicemia de jejum alterada: entre 100 mg/dL e 125 mg/dL</li>
                <li>Diabetes: igual ou superior a 126 mg/dL</li>
                <li>
                    Glicemia de jejum baixa ou hipoglicemia: igual ou inferior a
                    70 mg/dL
                </li>
            </ul>

            <p>
                Fonte:{" "}
                <a
                    href="https://blog.ramosmedicinadiagnostica.com.br/entenda-os-valores-de-referencia-da-glicemia/"
                    target="_blank"
                >
                    Entenda os valores de referência da Glicemia
                </a>
            </p>
            
        </div>
    )
}

export default GlucoseAverage
