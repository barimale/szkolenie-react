const ProductList = (props) => {
    return (
        <>
            {props.products.length === 0 &&
                (
                    <p>Brak dostępnych produktów.</p>
                )}
            {props.products.length > 0 &&
                (
                    <table>
                        <tr>
                            <th>Nazwa produktu</th>
                            <th>Cena</th>
                        </tr>
                        {props.products.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                </tr>
                            );
                        })}

                    </table>
                )}
        </>
    );
}

export default ProductList;
