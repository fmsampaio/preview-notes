import styles from "./TimeTable.module.css"
import { timeToStr } from "../utils/utilities"
import { Table } from "react-bootstrap"

export default function TimeTable( {timeMarks} ) {
    return (
        <div className={styles.main_container}>            
            <Table className={styles.time_table}>
                <thead>
                    <tr>
                        <th>Presentation part</th>
                        <th>Time elapsed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        timeMarks.map( (mark) => (
                            <tr>
                                <td>
                                    <input type="text"/>
                                </td>
                                <td>{timeToStr(mark)} {mark.is_final ? "*" : ""} </td>
                            </tr>
                        ))
                    }
                </tbody>
            
            </Table>
       </div>
    )
}