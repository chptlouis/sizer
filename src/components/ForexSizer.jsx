import React, { useMemo } from "react";
import { useState } from "react";
import { FormControl, MenuItem, Select, Card, CardContent, TextField } from "@mui/material";

function ForexSizer({ pairs }) {
    const [pair, setPair] = useState('EURUSD');
    const [entryPrice, setEntryPrice] = useState(1);
    const [stopLoss, setStopLoss] = useState(1);
    const [risk, setRisk] = useState(0);
    const [accountBalance, setAccountBalance] = useState(50000);

    const contractSize = useMemo(() => {
        for (let i = 0; i < pairs.length; i++) {
            if (pairs[i][0] === pair) {
                return pairs[i][1];
            }
        }
    }, [pair, pairs])

    const positionSize = useMemo(() => {
        const accountRisk = accountBalance * (risk / 100);
        const pips = entryPrice - stopLoss;
        const pipValue = pips * contractSize;
        const positionSize = Math.round((accountRisk / pipValue) * 100) / 100;
        if (positionSize < 0)
            return((positionSize * -1));
        else
            return(positionSize);
    }, [entryPrice, stopLoss, risk, accountBalance, contractSize]);

    return (
        <Card>
            <CardContent>
                <h3 style={{ textAlign: 'center' }}>Forex/Indices Sizer</h3>
            </CardContent>
            <div style={{ padding: '0 20px 20px' }}>
                <FormControl fullWidth sx={{ mb: 3 }}>
                    <Select
                        value={pair}
                        onChange={(e) => setPair(e.target.value)}
                    >
                        {pairs.map((pair, index) => (
                            <MenuItem key={index} value={pair[0]}>{pair[0]}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{ mb: 3 }}>
                    <TextField
                        value={entryPrice}
                        id="entry-price"
                        type="number"
                        label="Entry Price"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => setEntryPrice(e.target.value)}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 3 }}>
                    <TextField
                        value={stopLoss}
                        id="stop-loss"
                        type="number"
                        label="Stop Loss"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => setStopLoss(e.target.value)}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 3 }}>
                    <TextField
                        value={risk}
                        id="risk"
                        type="number"
                        label="Risk"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => setRisk(e.target.value)}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 3 }}>
                    <Select
                        value={accountBalance}
                        onChange={(e) => setAccountBalance(e.target.value)}
                    >
                        <MenuItem value={50000}>50000</MenuItem>
                        <MenuItem value={100000}>100000</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <CardContent>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div>
                        <h3 style={{ textAlign: 'center' }}>Position Size</h3>
                        <h1 style={{ textAlign: 'center' }}>{positionSize} lots</h1>
                    </div>
                    <div>
                        <h3 style={{ textAlign: 'center' }}>Money in risk</h3>
                        <h1 style={{ textAlign: 'center' }}>{accountBalance * (risk / 100)} USD</h1>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default ForexSizer;