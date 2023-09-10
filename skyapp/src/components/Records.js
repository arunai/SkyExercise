import React from 'react';
import formatDate from '../Common/FormatDate';
const Records = (props) => {
    const { data, search } = props;
    return (
        <table className="table">
            <thead>
                <tr>
                    <td>Symbol</td>
                    <td>High</td>
                    <td>Low</td>
                    <td>Volume</td>
                    <td>QuoteVolume</td>
                    <td>PercentChange</td>
                    <td>UpdatedAt</td>
                </tr>
            </thead>
            <tbody>
                {/* Filtering to check for the searched crypto */}
                {data.filter((val) => {
                    return val.symbol.toLowerCase().includes(search && search.toLowerCase());
                })
                    .map((val, id) => {
                        return (
                            <>
                                <tr id={id}>
                                    <td className="rank">{val.symbol}</td>
                                    <td>
                                        {(Math.round(Number(val.high) * 100000000) / 100000000).toFixed(8)}
                                    </td>
                                    <td>{(Math.round(Number(val.low) * 100000000) / 100000000).toFixed(8)}</td>
                                    <td>${(Math.round(Number(val.volume) * 100) / 100).toFixed(2)}</td>
                                    <td>${(Math.round(Number(val.quoteVolume) * 100) / 100).toFixed(2)}</td>
                                    <td>{Number(val.percentChange || 0)}% </td>
                                    <td> {formatDate(val.updatedAt)}</td>
                                </tr>
                            </>
                        );
                    })}
            </tbody>
        </table>
    )
}

export default Records  