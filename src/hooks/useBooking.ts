import { useState } from 'react';
import { bookingApi } from '@/lib/api';

export const useBooking = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const submitBooking = async (data: any) => {
        setLoading(true);
        setError(null);
        try {
            await bookingApi.create(data);
            setSuccess(true);
        } catch (err: any) {
            setError(err.response?.data?.message || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const resetBooking = () => {
        setSuccess(false);
        setError(null);
    };

    return { submitBooking, loading, success, error, resetBooking };
};
