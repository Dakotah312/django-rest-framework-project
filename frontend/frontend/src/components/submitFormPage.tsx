import { useState } from 'react';
import {
    Box,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Typography,
    type SelectChangeEvent,
} from '@mui/material';

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        company: '',
        jobTitle: '',
        source: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (e: SelectChangeEvent) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload: Record<string, any> = {
            full_name: formData.fullName,
            email: formData.email,
            source: formData.source,
            ...(formData.company && { company_name: formData.company }),
            ...(formData.jobTitle && { job_title: formData.jobTitle }),
        };

        try {
            const res = await fetch('http://localhost:8000/api/professionals/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.detail || 'Failed to submit');

            setFormData({ fullName: '', email: '', company: '', jobTitle: '', source: '' });
        } catch (err: any) {
            console.error('Error submitting form:', err.message || err);
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            autoComplete="off"
            className="max-w-md mx-auto mt-50 flex flex-col gap-4 p-6 bg-white rounded-xl shadow-md border border-blue-100"
        >
            <Typography variant="h5" className="text-center mb-4">
                Register New Professional
            </Typography>

            <TextField name="fullName" label="Full Name" required value={formData.fullName} onChange={handleChange} fullWidth />
            <TextField name="email" label="Email" required value={formData.email} onChange={handleChange} fullWidth />
            <TextField name="company" label="Company Name" value={formData.company} onChange={handleChange} fullWidth />
            <TextField name="jobTitle" label="Job Title" value={formData.jobTitle} onChange={handleChange} fullWidth />

            <FormControl fullWidth>
                <InputLabel id="source-label">Source *</InputLabel>
                <Select
                    labelId="source-label"
                    name="source"
                    required
                    value={formData.source}
                    onChange={handleSelectChange}
                >
                    <MenuItem value="direct">Direct</MenuItem>
                    <MenuItem value="partner">Partner</MenuItem>
                    <MenuItem value="internal">Internal</MenuItem>
                </Select>
            </FormControl>

            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </Box>
    );
}
