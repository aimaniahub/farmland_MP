import React from 'react';
import { Share2, Facebook, Twitter, Linkedin, Mail, Link } from 'lucide-react';

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
  className?: string;
  showLabel?: boolean;
  iconSize?: number;
  platforms?: ('facebook' | 'twitter' | 'linkedin' | 'email' | 'copy')[];
}

const SocialShare: React.FC<SocialShareProps> = ({
  url,
  title,
  description = '',
  className = '',
  showLabel = true,
  iconSize = 20,
  platforms = ['facebook', 'twitter', 'linkedin', 'email', 'copy'],
}) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleShare = (platform: string) => {
    if (platform === 'copy') {
      copyToClipboard();
      return;
    }

    const shareUrl = shareLinks[platform as keyof typeof shareLinks];
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return <Facebook size={iconSize} />;
      case 'twitter':
        return <Twitter size={iconSize} />;
      case 'linkedin':
        return <Linkedin size={iconSize} />;
      case 'email':
        return <Mail size={iconSize} />;
      case 'copy':
        return <Link size={iconSize} />;
      default:
        return <Share2 size={iconSize} />;
    }
  };

  const getPlatformLabel = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return 'Facebook';
      case 'twitter':
        return 'Twitter';
      case 'linkedin':
        return 'LinkedIn';
      case 'email':
        return 'Email';
      case 'copy':
        return 'Copy Link';
      default:
        return 'Share';
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return 'bg-[#3b5998] hover:bg-[#344e86]';
      case 'twitter':
        return 'bg-[#1da1f2] hover:bg-[#0d95e8]';
      case 'linkedin':
        return 'bg-[#0077b5] hover:bg-[#00669c]';
      case 'email':
        return 'bg-[#ea4335] hover:bg-[#d73925]';
      case 'copy':
        return 'bg-gray-700 hover:bg-gray-800';
      default:
        return 'bg-primary-600 hover:bg-primary-700';
    }
  };

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {platforms.map((platform) => (
        <button
          key={platform}
          onClick={() => handleShare(platform)}
          className={`flex items-center justify-center rounded-md transition-colors ${getPlatformColor(platform)} text-white ${showLabel ? 'px-4 py-2' : 'p-2'}`}
          aria-label={`Share on ${getPlatformLabel(platform)}`}
        >
          {getPlatformIcon(platform)}
          {showLabel && <span className="ml-2">{getPlatformLabel(platform)}</span>}
        </button>
      ))}
    </div>
  );
};

export default SocialShare;