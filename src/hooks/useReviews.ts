import { useState, useEffect } from 'react';
import { reviewApi } from '@/lib/api';

export const useReviews = () => {
    const [reviews, setReviews] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await reviewApi.getPublished();
                setReviews(res.data);
            } catch (err: any) {
                setError('Failed to load reviews');
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    return { reviews, loading, error };
};
