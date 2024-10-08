export default function JoinMailingList() {

  return (
    <>
      <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">Join Mailing List</h1>
      <div dangerouslySetInnerHTML={{__html: `
        <div id="mc_embed_shell">
        <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
        <style type="text/css">
          #mc_embed_signup{false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
          /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
            We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
          #mc_embed_signup form {margin: 0px}
        </style>
        <div id="mc_embed_signup">
            <form action="https://xyz.us17.list-manage.com/subscribe/post?u=0235dae9ca91fece8960fad17&amp;id=f4a37dff55&amp;f_id=003e61e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                <div id="mc_embed_signup_scroll">
                  <h2 class="text-slate-900 dark:text-white">Stay up-to-date on the latest news</h2>
                  <div class="mc-field-group"><label for="mce-EMAIL" class="text-slate-900 dark:text-white">Email Address <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div>
                <div id="mce-responses" class="clear foot">
                    <div class="response" id="mce-error-response" style="display: none;"></div>
                    <div class="response" id="mce-success-response" style="display: none;"></div>
                </div>
            <div aria-hidden="true" style="position: absolute; left: -5000px;">
                /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
                <input type="text" name="b_0235dae9ca91fece8960fad17_f4a37dff55" tabindex="-1" value="">
            </div>
                <div class="optionalParent">
                    <div class="clear foot">
                        <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
                    </div>
                </div>
            </div>
        </form>
        </div>
        <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';}(jQuery));var $mcj = jQuery.noConflict(true);</script></div>
      `}} />
    </>
  )
}
