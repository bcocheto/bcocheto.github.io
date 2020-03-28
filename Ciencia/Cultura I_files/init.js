/*
  Draftautosave plugin
  (P) PSNet, 2008 - 2012
  http://psnet.lookformp3.net/
  http://livestreet.ru/profile/PSNet/
  http://livestreetcms.com/profile/PSNet/
*/

var ls = ls || {};

ls.draftautosave = (function ($) {

  this.AutoSaveProcess = function () {
    // if user use tinyMCE - get text
    if ((BLOG_USE_TINYMCE) && (tinyMCE)) {
      $ ('#topic_text').val (tinyMCE.activeEditor.getContent ());
    }

    // text fields autofill
    if (!$ ('#Draftautosave_Autosave_Disabled').attr ('checked')) {
      // if user typed text
      if ($.trim ($ ('#topic_text').val ()) != '') {
      
        if ($.trim ($ ('#topic_title').val ()) == '') {
          // fill the title
          $ ('#topic_title').val (Draftautosave_Default_Title);
        }
        if ($.trim ($ ('#topic_tags').val ()) == '') {
          // fill tags
          $ ('#topic_tags').val (Draftautosave_Default_Tags);
        }
        
      }
    }

    if ((!$ ('#Draftautosave_Autosave_Disabled').attr ('checked')) && 
        ($.trim ($ ('#topic_text').val ()) != '') && 
        ($.trim ($ ('#topic_title').val ()) != '') &&
        ($.trim ($ ('#topic_tags').val ()) != '')) {
      
      oFormTopic = $ ('#draft_id').parent ();
      QueryString = oFormTopic.serialize ();
      
      ls.ajax (aRouter ['draftautosave'] + 'save/', QueryString, function (result) {
        if (result.bStateError) {
          ls.msg.error (result.sMsgTitle, result.sMsg);
        } else {
          if (!Draftautosave_Dont_Show_Popup_Msg) {
            ls.msg.notice (Draftautosave_Msg_Autosave, Draftautosave_Msg_Successfully_Saved);
          }
          
          // fill form values
          $ ('#Draftautosave_Autosave_Time').text (result.sTime);

          if (result.sId) {
            $ ('#draft_id').val (result.sId);
          }
          
        }
      }, {type: 'POST', dataType: 'json' });

    }
  };

  // ---

  this.MakeSomeTags = function () {
    if ($.trim ($ ('#topic_tags').val ()) == '') {
      Tags = $.trim ($ ('#topic_title').val ()).replace (/(^|\s)-(\s|$)/g, ',');
      $ ('#topic_tags').val (Tags);
    }
  };
  
  // ---

  return this;

}).call (ls.draftautosave || {}, jQuery);

// ---

jQuery (document).ready (function ($) {
  // if this is not add topic page - go out
  if (typeof Draftautosave_Time_For_Update === 'undefined') return false;
  
  setInterval (ls.draftautosave.AutoSaveProcess, Draftautosave_Time_For_Update);

  $ ('#topic_title').bind ('change', function () {
    ls.draftautosave.MakeSomeTags ();
  });
});
