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
  HatenaIcon,
  HatenaShareButton,
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
  PinterestIcon,
  PinterestShareButton,
  PocketIcon,
  PocketShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TumblrIcon,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton,
  ViberIcon,
  ViberShareButton,
  VKIcon,
  VKShareButton,
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
    <div>
      <div className="inline-flex space-x-2">
        <div>
          <FacebookShareButton url={shareUrl} quote={title}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
        <div>
          <FacebookMessengerShareButton url={shareUrl} appId="521270401588372">
            <FacebookMessengerIcon size={32} round />
          </FacebookMessengerShareButton>
        </div>
        <div>
          <TwitterShareButton url={shareUrl} title={title}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>
        <div>
          <TelegramShareButton url={shareUrl} title={title}>
            <TelegramIcon size={32} round />
          </TelegramShareButton>
        </div>
        <div>
          <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
        <div>
          <LinkedinShareButton url={shareUrl}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>
        <div>
          <PinterestShareButton url={router.asPath} media={blurredBgImage}>
            <PinterestIcon size={32} round />
          </PinterestShareButton>
        </div>
        <div>
          <VKShareButton url={shareUrl} image={blurredBgImage}>
            <VKIcon size={32} round />
          </VKShareButton>
        </div>
        <div>
          <OKShareButton url={shareUrl} image={blurredBgImage}>
            <OKIcon size={32} round />
          </OKShareButton>
        </div>
        <div>
          <RedditShareButton url={shareUrl} title={title} windowWidth={660} windowHeight={460}>
            <RedditIcon size={32} round />
          </RedditShareButton>
        </div>
        <div>
          <TumblrShareButton url={shareUrl} title={title}>
            <TumblrIcon size={32} round />
          </TumblrShareButton>
        </div>
        <div>
          <LivejournalShareButton url={shareUrl} title={title} description={shareUrl}>
            <LivejournalIcon size={32} round />
          </LivejournalShareButton>
        </div>
        <div>
          <MailruShareButton url={shareUrl} title={title}>
            <MailruIcon size={32} round />
          </MailruShareButton>
        </div>
        <div>
          <EmailShareButton url={shareUrl} subject={title} body="body">
            <EmailIcon size={32} round />
          </EmailShareButton>
        </div>
        <div>
          <ViberShareButton url={shareUrl} title={title}>
            <ViberIcon size={32} round />
          </ViberShareButton>
        </div>
        <div>
          <WorkplaceShareButton url={shareUrl} quote={title}>
            <WorkplaceIcon size={32} round />
          </WorkplaceShareButton>
        </div>
        <div>
          <LineShareButton url={shareUrl} title={title}>
            <LineIcon size={32} round />
          </LineShareButton>
        </div>
        <div>
          <WeiboShareButton url={shareUrl} title={title} image={blurredBgImage}>
            <WeiboIcon size={32} round />
          </WeiboShareButton>
        </div>
        <div>
          <PocketShareButton url={shareUrl} title={title}>
            <PocketIcon size={32} round />
          </PocketShareButton>
        </div>
        <div>
          <InstapaperShareButton url={shareUrl} title={title}>
            <InstapaperIcon size={32} round />
          </InstapaperShareButton>
        </div>
        <div>
          <HatenaShareButton url={shareUrl} title={title} windowWidth={660} windowHeight={460}>
            <HatenaIcon size={32} round />
          </HatenaShareButton>
        </div>
      </div>
    </div>
  );
};
export default SocialShare;
