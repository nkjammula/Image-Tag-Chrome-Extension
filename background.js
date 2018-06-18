// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log('The color is green.');
  });

});


var contextMenuItem = {
    "id": "tagImage",
    "title": "Tag Image",
    "contexts": ["image"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickTaggedImage, tab) {
    if (clickTaggedImage.menuItemId === "tagImage") {
        chrome.storage.sync.set({imageUrl: clickTaggedImage.srcUrl});
        chrome.tabs
        chrome.tabs.executeScript(tab.id,{file:"utils.js"});
        chrome.tabs.executeScript(tab.id,{file:"imageScript.js"});
    }
});

