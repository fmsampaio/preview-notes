import styles from "./TimeTable.module.css"
import { timeToStr } from "../utils/utilities"
import { Table } from "react-bootstrap"

export default function TimeTable( {timeElapsed} ) {
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
                        timeElapsed.map( (mark) => (
                            <tr>
                                <td>
                                    {
                                        (! mark.is_total) ?
                                            <input type="text"/>
                                        :
                                            <input type="text" value="Total time"/>
                                    }
                                </td>
                                <td>{timeToStr(mark)} </td>
                            </tr>
                        ))
                    }
                </tbody>
            
            </Table>
       </div>
    )
}