import React, { useState, useEffect } from 'react';
import { X, Code2, Send } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0A1128]/80 backdrop-blur-sm pointer-events-auto"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg transform transition-all duration-300 scale-100 pointer-events-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute left-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-8">
          {/* Logo and Title */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-[#034078] p-3 rounded-xl">
              <Code2 className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#001F54]">בואו נתחיל לעבוד</h2>
              <p className="text-gray-600">קבלו ייעוץ ראשוני חינם</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 text-right">
                שם מלא
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="הזן את שמך המלא"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#034078] focus:border-transparent transition-all text-right"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 text-right">
                טלפון
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="הזן את מספר הטלפון שלך"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#034078] focus:border-transparent transition-all text-right"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 text-right">
                אימייל
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="הזן את כתובת האימייל שלך"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#034078] focus:border-transparent transition-all text-right"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center px-6 py-3 bg-[#034078] text-white rounded-lg hover:bg-[#034078]/90 transition-all transform hover:scale-105"
            >
              <Send className="ml-2 h-5 w-5" />
              התחל פרויקט
            </button>
          </form>

          {/* Call to Action */}
          <p className="mt-6 text-center text-[#1282A2] font-medium">
            !בואו ניצור משהו מדהים ביחד
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;