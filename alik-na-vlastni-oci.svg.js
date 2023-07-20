<script type="text/javascript"><![CDATA[
document.addEventListener('click', function(e) {
      e = e || window.event;
      target = e.target || e.srcElement;
      nick = target.parentElement.querySelector("title").textContent;
      edges = document.getElementsByClassName("edge");
      for (idx = 0, len = edges.length; idx < len; ++idx) {
          edge = document.getElementById(edges[idx].id).querySelector("path")
          edge.setAttribute("stroke-width", "1");
          edge.setAttribute("stroke-opacity", "0.333333");
          edge.setAttribute("stroke", "#444444");
      }
      nodes = document.getElementsByClassName("node");
      for (idx = 0, len = nodes.length; idx < len; ++idx) {
          node = document.getElementById(nodes[idx].id).querySelector("text")
          node.setAttribute("font-size", "14");
      }
      edges = document.getElementsByClassName("edge");
      for (idx = 0, len = edges.length; idx < len; ++idx) {
        title = edges[idx].querySelector("title").textContent.split("--");
        if (title[0] == nick || title[1] == nick) {
          edge = document.getElementById(edges[idx].id).querySelector("path")
          edge.setAttribute("stroke-width", "3");
          edge.setAttribute("stroke-opacity", "1");
          edge.setAttribute("stroke", "#cc241d");
          nodes = document.getElementsByClassName("node");
          for (idxx = 0, lenn = nodes.length; idxx < lenn; ++idxx) {
            node = nodes[idxx].querySelector("title").textContent;
            if (node == title[0] || node == title[1]) {
              target_id = nodes[idxx].id;
              node = document.getElementById(nodes[idxx].id).querySelector("text")
              node.setAttribute("font-size", "22");
            }
          }
        }
      }
  }, false);
]]></script>
