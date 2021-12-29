import { blurredBgImage } from '@public/images/bg-base-64';
import { useRouter } from 'next/router';
import React from 'react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  FacebookShareCount,
  HatenaIcon,
  HatenaShareButton,
  HatenaShareCount,
  InstapaperIcon,
  InstapaperShareButton,
  LineIcon,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  LivejournalIcon,
  LivejournalShareButton,
  MailruIcon,
  MailruShareButton,
  OKIcon,
  OKShareButton,
  OKShareCount,
  PinterestIcon,
  PinterestShareButton,
  PinterestShareCount,
  PocketIcon,
  PocketShareButton,
  RedditIcon,
  RedditShareButton,
  RedditShareCount,
  TelegramIcon,
  TelegramShareButton,
  TumblrIcon,
  TumblrShareButton,
  TumblrShareCount,
  TwitterIcon,
  TwitterShareButton,
  ViberIcon,
  ViberShareButton,
  VKIcon,
  VKShareButton,
  VKShareCount,
  WeiboIcon,
  WeiboShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  WorkplaceIcon,
  WorkplaceShareButton,
} from 'react-share';
const shareUrl =
  'https://www.spacejoy.com/interior-designs/living-room-ideas/best-selling-home-decor-and-furniture-pieces-of-2021';
const title = 'GitHub';

const SocialShare = () => {
  const router = useRouter();

  return (
    <div className="flex">
      <div className="text-center">
        <FacebookShareButton url={shareUrl} quote={title}>
          <FacebookIcon size={32} />
        </FacebookShareButton>
        <div className="text-xs text-gray-500">
          <FacebookShareCount url={shareUrl}>{(count) => count}</FacebookShareCount>
        </div>
      </div>
      <div>
        <FacebookMessengerShareButton url={shareUrl} appId="521270401588372">
          <FacebookMessengerIcon size={32} />
        </FacebookMessengerShareButton>
      </div>
      <div>
        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={32} />
        </TwitterShareButton>
      </div>
      <div>
        <TelegramShareButton url={shareUrl} title={title}>
          <TelegramIcon size={32} />
        </TelegramShareButton>
      </div>
      <div>
        <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
          <WhatsappIcon size={32} />
        </WhatsappShareButton>
      </div>
      <div>
        <LinkedinShareButton url={shareUrl}>
          <LinkedinIcon size={32} />
        </LinkedinShareButton>
      </div>
      <div className="text-center">
        <PinterestShareButton url={router.asPath} media={blurredBgImage}>
          <PinterestIcon size={32} />
        </PinterestShareButton>
        <div className="text-xs text-gray-500">
          <PinterestShareCount url={shareUrl} />
        </div>
      </div>
      <div className="text-center">
        <VKShareButton url={shareUrl} image={blurredBgImage}>
          <VKIcon size={32} />
        </VKShareButton>
        <div className="text-xs text-gray-500">
          <VKShareCount url={shareUrl} />
        </div>
      </div>
      <div className="text-center">
        <OKShareButton url={shareUrl} image={blurredBgImage}>
          <OKIcon size={32} />
        </OKShareButton>
        <div className="text-xs text-gray-500">
          <OKShareCount url={shareUrl} />
        </div>
      </div>
      <div className="text-center">
        <RedditShareButton url={shareUrl} title={title} windowWidth={660} windowHeight={460}>
          <RedditIcon size={32} />
        </RedditShareButton>
        <div className="text-xs text-gray-500">
          <RedditShareCount url={shareUrl} />
        </div>
      </div>
      <div className="text-center">
        <TumblrShareButton url={shareUrl} title={title}>
          <TumblrIcon size={32} />
        </TumblrShareButton>
        <div className="text-xs text-gray-500">
          <TumblrShareCount url={shareUrl} />
        </div>
      </div>
      <div>
        <LivejournalShareButton url={shareUrl} title={title} description={shareUrl}>
          <LivejournalIcon size={32} />
        </LivejournalShareButton>
      </div>
      <div>
        <MailruShareButton url={shareUrl} title={title}>
          <MailruIcon size={32} />
        </MailruShareButton>
      </div>
      <div>
        <EmailShareButton url={shareUrl} subject={title} body="body">
          <EmailIcon size={32} />
        </EmailShareButton>
      </div>
      <div>
        <ViberShareButton url={shareUrl} title={title}>
          <ViberIcon size={32} />
        </ViberShareButton>
      </div>
      <div>
        <WorkplaceShareButton url={shareUrl} quote={title}>
          <WorkplaceIcon size={32} />
        </WorkplaceShareButton>
      </div>
      <div>
        <LineShareButton url={shareUrl} title={title}>
          <LineIcon size={32} />
        </LineShareButton>
      </div>
      <div>
        <WeiboShareButton url={shareUrl} title={title} image={blurredBgImage}>
          <WeiboIcon size={32} />
        </WeiboShareButton>
      </div>
      <div>
        <PocketShareButton url={shareUrl} title={title}>
          <PocketIcon size={32} />
        </PocketShareButton>
      </div>
      <div>
        <InstapaperShareButton url={shareUrl} title={title}>
          <InstapaperIcon size={32} />
        </InstapaperShareButton>
      </div>
      <div className="text-center">
        <HatenaShareButton url={shareUrl} title={title} windowWidth={660} windowHeight={460}>
          <HatenaIcon size={32} />
        </HatenaShareButton>
        <div className="text-xs text-gray-500">
          <HatenaShareCount url={shareUrl} />
        </div>
      </div>
    </div>
  );
};
export default SocialShare;
