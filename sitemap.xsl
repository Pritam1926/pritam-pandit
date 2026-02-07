<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif; color: #333; max-width: 75em; margin: 0 auto; padding: 2em; }
          h1 { color: #0056b3; margin-bottom: 20px; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th { text-align: left; padding: 10px; border-bottom: 2px solid #ddd; background: #f8f9fa; }
          td { padding: 10px; border-bottom: 1px solid #eee; }
          tr:hover { background-color: #f8f9fa; }
          a { color: #0056b3; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .intro { margin-bottom: 20px; color: #666; }
        </style>
      </head>
      <body>
        <h1>XML Sitemap</h1>
        <div class="intro">
          <p>This is the XML Sitemap for <a href="https://pritam1926.github.io/pritam-pandit/">Pritam Pandit - Portfolio</a>.</p>
          <p>This file is designed for search engine crawlers (like Google, Bing) to index the website structure.</p>
        </div>
        <table>
          <tr>
            <th>URL</th>
            <th>Priority</th>
            <th>Last Modified</th>
          </tr>
          <xsl:for-each select="sitemap:urlset/sitemap:url">
            <tr>
              <td>
                <xsl:variable name="itemURL">
                  <xsl:value-of select="sitemap:loc"/>
                </xsl:variable>
                <a href="{$itemURL}">
                  <xsl:value-of select="sitemap:loc"/>
                </a>
              </td>
              <td>
                <xsl:value-of select="sitemap:priority"/>
              </td>
              <td>
                <xsl:value-of select="sitemap:lastmod"/>
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
