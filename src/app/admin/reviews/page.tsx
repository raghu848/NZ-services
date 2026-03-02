"use client";

import { useEffect, useState, useCallback } from "react";
import { reviewApi } from "@/lib/api";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import FadeUp from "@/components/ui/FadeUp";
import { Modal } from "@/components/ui/Modal";

export default function ReviewsModerationPage() {
    const [reviews, setReviews] = useState<any[]>([]);
    const [selectedReview, setSelectedReview] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const fetchReviews = useCallback(async () => {
        setLoading(true);
        try {
            const res = await reviewApi.getAll();
            setReviews(res.data || []);
        } catch (err) {
            console.error("Failed to fetch reviews", err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchReviews();
    }, [fetchReviews]);

    const handleApprove = async (id: number) => {
        try {
            await reviewApi.approve(id);
            fetchReviews();
            if (selectedReview?.id === id) setSelectedReview(null);
        } catch (err) {
            alert("Failed to approve review");
        }
    };

    const handlePublish = async (id: number) => {
        try {
            await reviewApi.publish(id);
            fetchReviews();
            if (selectedReview?.id === id) setSelectedReview(null);
        } catch (err) {
            alert("Failed to publish review");
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure you want to delete this review?")) return;
        try {
            await reviewApi.delete(id);
            fetchReviews();
            if (selectedReview?.id === id) setSelectedReview(null);
        } catch (err) {
            alert("Failed to delete review");
        }
    };

    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-4xl font-display text-white mb-2">REVIEWS MODERATION</h1>
                <p className="text-muted font-body">Manage customer feedback and decide what appears on your website.</p>
            </header>

            <div className="bg-dark-card border border-border-dark overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm font-body">
                        <thead className="bg-dark/50 text-[10px] uppercase font-heading tracking-widest text-white/40">
                            <tr>
                                <th className="px-6 py-4">ID</th>
                                <th className="px-6 py-4">Author</th>
                                <th className="px-6 py-4">Review</th>
                                <th className="px-6 py-4">Rating</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-dark">
                            {reviews.length === 0 && !loading && (
                                <tr>
                                    <td colSpan={6} className="px-6 py-10 text-center text-muted italic">No reviews submitted yet.</td>
                                </tr>
                            )}
                            {reviews.map((review) => (
                                <tr key={review.id} className="hover:bg-white/5 transition-fast cursor-pointer" onClick={() => setSelectedReview(review)}>
                                    <td className="px-6 py-4 text-white/40">#{review.id}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <span className="text-white font-medium">{review.authorName}</span>
                                            <span className="text-[10px] text-muted uppercase">{review.suburb}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-white/80 line-clamp-2 text-xs max-w-sm">"{review.body}"</p>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex text-yellow-500">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <span key={i}>★</span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex flex-col gap-1">
                                            <Badge variant={review.isApproved ? 'completed' : 'pending'}>
                                                {review.isApproved ? 'Approved' : 'Pending'}
                                            </Badge>
                                            {review.isPublished && (
                                                <Badge variant="confirmed" className="bg-blue-500/10 text-blue-400">Published</Badge>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                                        <div className="flex gap-4">
                                            {!review.isApproved && (
                                                <button onClick={() => handleApprove(review.id)} className="text-green-500 hover:text-green-400 text-xs uppercase font-heading">Approve</button>
                                            )}
                                            {review.isApproved && !review.isPublished && (
                                                <button onClick={() => handlePublish(review.id)} className="text-blue-500 hover:text-blue-400 text-xs uppercase font-heading">Publish</button>
                                            )}
                                            <button onClick={() => handleDelete(review.id)} className="text-red-500 hover:text-red-400 text-xs uppercase font-heading">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal
                isOpen={!!selectedReview}
                onClose={() => setSelectedReview(null)}
                title="Review Moderation"
            >
                {selectedReview && (
                    <div className="space-y-8">
                        <div className="pb-8 border-b border-border-dark flex justify-between items-start">
                            <div>
                                <h4 className="text-white text-lg font-heading">{selectedReview.authorName}</h4>
                                <p className="text-muted font-body text-sm uppercase tracking-widest">{selectedReview.suburb}</p>
                            </div>
                            <div className="flex text-yellow-500 text-xl font-heading">
                                {[...Array(selectedReview.rating)].map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-[10px] uppercase font-heading tracking-widest text-muted">Review Content</p>
                            <p className="text-white text-lg font-body italic leading-relaxed">
                                "{selectedReview.body}"
                            </p>
                        </div>

                        <div className="pt-8 border-t border-border-dark flex justify-between items-center">
                            <div className="flex flex-col gap-2">
                                <Badge variant={selectedReview.isApproved ? 'completed' : 'pending'}>
                                    {selectedReview.isApproved ? 'Approved' : 'Pending Approval'}
                                </Badge>
                                {selectedReview.isPublished && (
                                    <Badge variant="confirmed" className="bg-blue-500/10 text-blue-400 w-fit">Published Live</Badge>
                                )}
                            </div>
                            <div className="flex gap-4">
                                {!selectedReview.isApproved && (
                                    <Button variant="primary" size="sm" onClick={() => handleApprove(selectedReview.id)}>Approve Review</Button>
                                )}
                                {selectedReview.isApproved && !selectedReview.isPublished && (
                                    <Button variant="white" size="sm" onClick={() => handlePublish(selectedReview.id)}>Publish Live</Button>
                                )}
                                <Button variant="ghost" size="sm" className="text-red-500" onClick={() => handleDelete(selectedReview.id)}>Delete Permanently</Button>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}
