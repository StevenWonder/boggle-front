import * as React from 'react'

interface Props {
    words: {
        [key: string]: string[]
    }
    onClose: () => void
}

// const tempProps : Props = {
//     words: {
//         steven: ['abc', 'def', 'ghi'],
//         lesley: ['112', '345', '789'],
//         steph: ['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc'].concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['END5', 'END4', 'END3', 'END2', 'END']),
//         steph2: ['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc'].concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['END5', 'END4', 'END3', 'END2', 'END']),
//         steph3: ['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc'].concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['END5', 'END4', 'END3', 'END2', 'END']),
//         steph4: ['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc'].concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['END5', 'END4', 'END3', 'END2', 'END']),
//         steph5: ['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc'].concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['qwe', 'rtyuiop', 'asd', 'asdasdasd', 'zxczxc']).concat(['END5', 'END4', 'END3', 'END2', 'END']),
//     }
// }

const BACKGROUND_COLOUR = '#c6abdb'

export const Results = (props: Props) => {
    const { words, onClose } = props
    return (
        <div style={{ display: 'flex', position: 'fixed', top: 0, alignContent: 'center', justifyContent: 'center', width: '100%'}}> 
            <div style={{maxHeight:'85%',  marginTop: '50px',  marginBottom:'50px'}}> 
                <div> 
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        fontSize: 32
                    }}>
                        <div style={{
                            width: 100 * Object.keys(words).length,
                            backgroundColor: BACKGROUND_COLOUR,
                            paddingBottom: 30
                        }}>Results</div>
                    </div>
                    <div className='hideScroll' style={{ height: '150px', overflowY: 'scroll'}}>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}>
                            <>
                                {Object.keys(words).map((val, key) => {
                                    return (
                                        <div style={{width: 100, height: 50, backgroundColor: BACKGROUND_COLOUR}} key={key}>
                                            <span>{val}</span>
                                        </div>
                                    )
                                })}
                            </>
                        </div>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}>
                            <>
                                {Object.keys(words).map((key) => {
                                    return (
                                        <div key={key} style={{width: 100, backgroundColor: BACKGROUND_COLOUR}}>
                                            {words[key].map((word) => {
                                                return (
                                                    <div key={word}>
                                                        <span>{word}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })}
                            </>
                        </div>
                    
                    </div> 
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        fontSize: 32
                    }}>
                        <div style={{
                            width: 100 * Object.keys(words).length,
                            backgroundColor: BACKGROUND_COLOUR,
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}>
                            <button onClick={onClose}>Close</button>
                        </div>
                    </div>
                </div> 
            </div> 
        </div> 
    )
}