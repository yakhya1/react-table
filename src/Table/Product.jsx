import React from 'react'
import styles from "./Table.module.css"

function Product(props) {
  return (
    <tr className={styles.tr}>
     <td>{props.id}</td>
     <td>{props.name}</td>
     <td>{props.price}</td>
     <td>{props.left}</td>
     <td>
        <img src={props.image} alt=""/>
     </td>
    </tr>
  )
}

export default Product