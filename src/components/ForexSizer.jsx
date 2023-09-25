import React, { useEffect } from "react";
import { useState } from "react";
import { FormControl, MenuItem, Select, Card, CardContent, TextField } from "@mui/material";

function ForexSizer() {
    const [pair, setPair] = useState('EURUSD');
    const [contractSize, setContractSize] = useState(1);
    const [entryPrice, setEntryPrice] = useState(1);
    const [stopLoss, setStopLoss] = useState(1);
    const [risk, setRisk] = useState(0);
    const [accountBalance, setAccountBalance] = useState(50000);
    const [positionSize, setPositionSize] = useState(0);

    const pairs = [
        'XAUUSD',
        'XAGUSD',
        'EURUSD',
        'EURAUD',
        'EURCAD',
        'EURCHF',
        'USDCAD',
        'USDCHF',
        'GBPUSD',
        'EURGBP',
        'EURJPY',
        'USDJPY',
        'AUDUSD',
        'NZDUSD',
        'NDQ100',
        'SPX500',
        'GER30',
    ];

    useEffect(() => {
        const calculateContractSize = () => {
            if (pair === 'EURUSD' || pair === 'EURAUD' || pair === 'EURCAD' || pair === 'EURCHF'
                || pair === 'GBPUSD' || pair === 'EURGBP' || pair === 'EURJPY' || pair === 'USDJPY'
                || pair === 'AUDUSD' || pair === 'NZDUSD' || pair === 'USDCAD' || pair === 'USDCHF') {
                setContractSize(100000);
            } else if (pair === 'XAUUSD') {
                setContractSize(100);
            } else if (pair === 'XAGUSD') {
                setContractSize(5000);
            } else if (pair === 'NDQ100') {
                setContractSize(10);
            } else if (pair === 'SPX500') {
                setContractSize(10);
            } else if (pair === 'GER30') {
                setContractSize(10);
            }
        }
        calculateContractSize();
    }, [pair]);

    useEffect(() => {
        const calculatePositionSize = () => {
            const accountRisk = accountBalance * (risk / 100);
            const pips = entryPrice - stopLoss;
            const pipValue = pips * contractSize;
            const positionSize = Math.round((accountRisk / pipValue) * 100) / 100;
            if (positionSize < 0)
                setPositionSize((positionSize * -1) / 10);
            else
                setPositionSize(positionSize / 10);
        }
        calculatePositionSize();
    }, [pair, entryPrice, stopLoss, risk, accountBalance, contractSize]);

    return (
        <Card>
            <CardContent>
                <h3 style={{ textAlign: 'center' }}>Forex Sizer</h3>
            </CardContent>
            <div style={{ padding: '0 20px 20px' }}>
                <FormControl fullWidth sx={{ mb: 3 }}>
                    <Select
                        value={pair}
                        onChange={(e) => setPair(e.target.value)}
                    >
                        {pairs.map((pair, index) => (
                            <MenuItem key={index} value={pair}>{pair}</MenuItem>
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
                        <MenuItem value={1000000}>100000</MenuItem>
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
                        <h1 style={{ textAlign: 'center' }}>{accountBalance * (risk / 1000)} USD</h1>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default ForexSizer;