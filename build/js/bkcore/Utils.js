var bkcore=bkcore||{};bkcore.Utils={},bkcore.Utils.createNormalMaterial=function(a){var b=bkcore.threejs.Shaders[0==a.perPixel?"normalV":"normal"],c=THREE.UniformsUtils.clone(b.uniforms);c.enableDiffuse.value=!0,c.enableSpecular.value=!0,c.enableReflection.value=void 0!=a.cube,c.tNormal.texture=a.normal,c.tDiffuse.texture=a.diffuse,c.tSpecular.texture=a.specular,c.uAmbientColor.value.setHex(void 0==a.ambient?4473924:a.ambient),c.uAmbientColor.value.convertGammaToLinear(),c.uNormalScale.value=void 0==a.normalScale?1:a.normalScale,void 0!=a.cube&&(c.tCube.texture=a.cube,c.uReflectivity.value=void 0==a.reflectivity?.9:a.reflectivity),c.uShininess.value=void 0==a.shininess?42:a.shininess;var d={fragmentShader:b.fragmentShader,vertexShader:b.vertexShader,uniforms:c,lights:!0,fog:!1},e=new THREE.ShaderMaterial(d);return e.perPixel=!0,e.metal=void 0==a.metal?!1:a.metal,e},bkcore.Utils.projectOnScreen=function(a,b){var c=new THREE.Matrix4;c.multiply(b.matrixWorldInverse,a.matrixWorld),c.multiply(b.projectionMatrix,c);var d=c.n44,e=new THREE.Vector3(c.n14/d,c.n24/d,c.n34/d);return e.multiplyScalar(.5),e.addScalar(.5),e},bkcore.Utils.URLParameters=null,bkcore.Utils.getURLParameter=function(a){if(null==bkcore.Utils.URLParameters){{var b={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(a,c,d){b[c]=d})}bkcore.Utils.URLParameters=b}return bkcore.Utils.URLParameters[a]},bkcore.Utils.getOffsetTop=function(a){var b=0;if(a.offsetParent){do b+=a.offsetTop;while(a=a.offsetParent)}else b=a.offsetTop;return[b]},bkcore.Utils.scrollTo=function(a){window.scroll(0,bkcore.Utils.getOffsetTop(document.getElementById(a)))},bkcore.Utils.updateClass=function(a,b,c){var d=document.getElementById(a);c?d.classList.add(b):d.classList.remove(b)},bkcore.Utils.request=function(a,b,c,d){function e(){for(var a=!1,b=0;b<f.length;b++){try{a=f[b]()}catch(c){continue}break}return a}var f=[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}],g=e();if(g){var h=b?"POST":"GET",i="o=bk";if(void 0!=d)for(var j in d)i+="&"+j+"="+d[j],b||(a+="?"+i);g.open(h,a,!0),b&&g.setRequestHeader("Content-type","application/x-www-form-urlencoded"),g.onreadystatechange=function(){4==g.readyState&&(200==g.status||304==g.status)&&c(g)},g.send(i)}};
//# sourceMappingURL=Utils.map