import { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Skeleton,
} from '@mui/material';

interface Professional {
    id: number;
    full_name: string;
    email: string;
    company_name: string;
    job_title: string;
    source: string;
    created_at: string;
}

const fetchProfessionals = async (source = '') => {
    const query = source ? `?source=${encodeURIComponent(source)}` : '';
    const res = await fetch(`http://localhost:8000/api/professionals/${query}`);
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
};

export default function ProfessionalsTable() {
    const [professionals, setProfessionals] = useState<Professional[]>([]);
    const [loading, setLoading] = useState(true);
    const [sourceFilter, setSourceFilter] = useState('');

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const data = await fetchProfessionals(sourceFilter);
                setProfessionals(data);
            } catch (err) {
                console.error(err);
                setProfessionals([]);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, [sourceFilter]);

    return (
        <TableContainer
            component={Paper}
            className="max-w-6xl mx-auto mt-50 flex flex-col gap-4 p-6 bg-white rounded-xl shadow-md border border-blue-100"
        >
            <div className="flex justify-end mb-4">
                <FormControl className="w-48">
                    <InputLabel id="source-filter-label">Source</InputLabel>
                    <Select
                        labelId="source-filter-label"
                        label="Source"
                        value={sourceFilter}
                        onChange={(e) => setSourceFilter(e.target.value)}
                    >
                        <MenuItem value=""></MenuItem>
                        <MenuItem value="direct">Direct</MenuItem>
                        <MenuItem value="partner">Partner</MenuItem>
                        <MenuItem value="internal">Internal</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <Table sx={{ minWidth: 650 }} aria-label="professionals table">
                <TableHead>
                    <TableRow>
                        {['Name', 'Email', 'Company', 'Job Title', 'Source', 'Created Date'].map((header) => (
                            <TableCell key={header} align={header === 'Name' ? 'left' : 'right'}>
                                {header}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {loading ? (
                        <TableRow>
                            <TableCell colSpan={6} align="center">
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                            </TableCell>
                        </TableRow>
                    ) : professionals.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={6} align="center" className="text-gray-500">
                                No data found
                            </TableCell>
                        </TableRow>
                    ) : (
                        professionals.map((p) => (
                            <TableRow key={p.id}>
                                <TableCell>{p.full_name}</TableCell>
                                <TableCell align="right">{p.email}</TableCell>
                                <TableCell align="right">{p.company_name}</TableCell>
                                <TableCell align="right">{p.job_title}</TableCell>
                                <TableCell align="right">{p.source}</TableCell>
                                <TableCell align="right">
                                    {new Date(p.created_at).toLocaleString('en-US', {
                                        dateStyle: 'medium',
                                        timeStyle: 'short',
                                    })}
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
