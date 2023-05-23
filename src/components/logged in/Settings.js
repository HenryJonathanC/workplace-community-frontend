import { Modal } from 'antd';
import React, { useState } from 'react'

const Settings = () => {
  const [isModalOpen1, setIsModalOpen1] = useState(false);


  const showModal1 = () => {
    setIsModalOpen1(true);
  };  
  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };

  return (
    <div style={{flex: .45}} className='ml-8 mt-16'>
        <h1 className='text-start mt-5 text-xl font-medium ml-5'>App Settings</h1>
        <div onClick={showModal1} style={{backgroundColor: 'white'}} className='cursor-pointer rounded-sm p-4 mt-4 flex justify-between items-center'>
            <h1 className='mx-3 font-medium'>FAQs</h1>
            <svg className='mx-3' xmlns="http://www.w3.org/2000/svg" width="11" height="20" id="arrow"><path fillRule="evenodd" d="M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413"></path></svg>
        </div>
        <Modal closable={false} width={500} open={isModalOpen1} footer={null} onCancel={handleCancel1}>
          <h1 className='text-xl font-medium'>Sign Up</h1>
          <h3 className='mt-5 font-medium'>How do i join Loominate?</h3>
          <p className='mt-2 text-xs'>You'll need to verify a work email to join Loominate. Verifying a valid work email will give you access to the private space for your company.</p>
          <p className='text-xs'>To create an account, enter your email address in the Email Verification field. After verifying you belong to the organization you will be able to create a username (pseudonym) and password.</p>
          <h3 className='mt-5 font-medium'>Why do i need to verify a work email to get access?</h3>
          <p className='mt-2 text-xs'>A core part of our service is to build and maintain a community of verified professionals belonging to your organization.</p>
          <p className='text-xs'>If you are worried about security, we'd like you to know that emails are not connected to accounts. You'll also never receive messages from Loominate unless requested. To learn more, check out the Privacy and Security section of this FAQ.</p>
          <h3 className='mt-5 font-medium'>I didn't receive a verification code. How do I complete the sign-up process?</h3>
          <p className='mt-2 text-xs'>Make sure you check your spam folder. If you still can't find the verification code, email us at <span className='text-base'>support@loominate.app</span>. If your company is blocking incoming or outgoing messages to Loominate, you can write to us from your personal email address.</p>
          <h1 className='mt-6 text-xl font-medium'>Using Loominate</h1>
          <h3 className='mt-5 font-medium'>What features are offered?</h3>
          <p className='mt-2 text-xs'>Loominate provides a forum where you can connect and discuss all things work-related with other colleagues. There are 4 interactions:</p>
          <ul className='list-disc text-xs ml-5'>
            <li>General discussions: to share knowledge, seek advice and ideate.</li>
            <li>Polls: to facilitate votes on issues and ideas.</li>
            <li>Initiatives: to launch ideas for organizational improvement, gain support from colleagues and bring visibility to solutions.</li>
            <li>Private Log: To journal sentiments, concerns and experiences such as misconduct or mental health struggles. You will be able to see how many others in the company are logging similar issues.</li>
          </ul>
          <p className='mt-2 text-xs'>Additional features include: group chats, 1:1 conversations and engagement with management (for companies subscribed to the platform). Please note that some features are still being rolled out.</p>
          <h3 className='mt-5 font-medium'>Why don't I have a company channel?</h3>
          <p className='mt-2 text-xs'>Company forums are unlocked when a minimum of 30 employees join. Each company must also meet certain criteria to be eligible for activation.</p>
          <h1 className='mt-6 text-xl font-medium'>Community Standards</h1>
          <h3 className='mt-5 font-medium'>What are the community policies?</h3>
          <p className='mt-2 text-xs'>In order to have a sustainable community, we require all members to abide by our Community Guidelines. We encourage everyone to reference our policies when writing and reporting content.</p>
          <h3 className='mt-5 font-medium'>How do i Report content?</h3>
          <p className='mt-2 text-xs'>Select the three dot icon (• • •) on the post or comment you wish to report. Choose the option to Flag Content and provide a reason. You can always reference our Community Guidelines when reporting content.</p>
          <h3 className='mt-5 font-medium'>How does Loominate moderate the community?</h3>
          <p className='mt-2 text-xs'>Loominate uses both AI moderation and community self-moderation. Posts are automatically removed based on the flags received. Please note that every flag is weighed differently based on its category. A specific number of flags is not the sole criteria for removal of content.</p>
          <p className='mt-2 text-xs'>Human moderation does take place for certain cases that are brought to our attention. If you request for our involvement, please flag the content that you’d like us to review. This helps expedite the review process.</p>
          <p className='mt-2 text-xs'>Users are subject to account restrictions when their content is removed. Repeat offenses or posting extremely inappropriate content can lead to a permanent restriction.</p>
          <h1 className='mt-6 text-xl font-medium'>Account Management</h1>
          <h3 className='mt-5 font-medium'>How do i change my username?</h3>
          <p className='mt-2 text-xs'>Coming soon</p>
          <h3 className='mt-5 font-medium'>How do i change my password?</h3>
          <p className='mt-2 text-xs'>Passwords can only be updated on the app. Go to Account `{'>'}` Settings `{'>'}` Change Password.</p>
          <h3 className='mt-5 font-medium'>I forgot my password. Can you help me retrieve it?</h3>
          <p className='mt-2 text-xs'>We are unable to retrieve passwords due to certain security constraints that are meant to protect your anonymity. To access Loominate, you will need to create a new account.</p>
          <h3 className='mt-5 font-medium'>Why am I being prompted to re-verify my email?</h3>
          <p className='mt-2 text-xs'>We ask users to re-verify emails on a periodic basis. This allows us to update each user's employment status and it allows us to give each user access to the appropriate channels.</p>
          <h3 className='mt-5 font-medium'>How do I delete my posts?</h3>
          <p className='mt-2 text-xs'>Select the three dot icon (• • •) on any post you wish to remove, then choose to delete. Deleting will permanently remove your content from Loominate.</p>
          <h3 className='mt-5 font-medium'>How do I delete my account?</h3>
          <p className='mt-2 text-xs'>Email us at <span className='text-base'>support@loominate.app</span>. Please provide your username when you submit your request.</p>
          <h1 className='mt-6 text-xl font-medium'>Privacy and Security</h1>
          <h3 className='mt-5 font-medium'>Will my employer know that I'm on Loominate if I verify my work email?</h3>
          <p className='mt-2 text-xs'>Your employer will not know that you're on Loominate if you decide to join.</p>
          <h3 className='mt-5 font-medium'>Can I be identified if I join Loominate?</h3>
          <p className='mt-2 text-xs'>The only information that’s required when joining is an email address. Emails are one-way hashed, salted and encrypted. Accounts are stored on a separate server from hashed email addresses. This means that your activity will never be connected to your email. Your name will not even be connected to your account since we never ask for this information. In short, you will be anonymous, even to our team members.</p>
          <p className='mt-2 text-xs'> To further protect your anonymity, we ask that you not share personally identifiable information with other users. With enough details, they may be able to find out your identity.</p>
          <h3 className='mt-5 font-medium'>Where can I find your Terms of Use and Privacy Policy?</h3>
          <p className='mt-2 text-xs'>You can find them here on our website: Terms of Use and Privacy Policy. To find them on the app, go to the verification screen or locate them by going to Account `{'>'}` Settings.</p>
          <p className='mt-5 text-sm'>Still need help? Contact us at <span className='font-medium'>support@loominate.app</span></p>
        </Modal>
        <div style={{backgroundColor: 'white'}} className='cursor-pointer rounded-sm p-4 mt-1 flex justify-between items-center'>
            <h1 className='mx-3 font-medium'>Terms of use</h1>
            <svg className='mx-3' xmlns="http://www.w3.org/2000/svg" width="11" height="20" id="arrow"><path fill-rule="evenodd" d="M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413"></path></svg>
        </div>
        <div style={{backgroundColor: 'white'}} className='cursor-pointer rounded-sm p-4 mt-1 flex justify-between items-center'>
            <h1 className='mx-3 font-medium'>Community Guidelines</h1>
            <svg className='mx-3' xmlns="http://www.w3.org/2000/svg" width="11" height="20" id="arrow"><path fill-rule="evenodd" d="M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413"></path></svg>
        </div>
        <div style={{backgroundColor: 'white'}} className='cursor-pointer shadow-sm rounded-sm p-4 mt-1 flex justify-between items-center'>
            <h1 className='mx-3 font-medium'>Change Password</h1>
            <svg className='mx-3' xmlns="http://www.w3.org/2000/svg" width="11" height="20" id="arrow"><path fill-rule="evenodd" d="M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413"></path></svg>
        </div>
        <div style={{backgroundColor: 'white'}} className='cursor-pointer rounded-sm shadow-sm p-4 mt-5 flex justify-between items-center'>
            <h1 className='mx-3 font-medium'>Version</h1>
            <p className='opacity-50'>v1.0.0</p>
        </div>
    </div>
  )
}

export default Settings