// Compiled by ClojureScript 1.9.908 {}
goog.provide('garden.compiler');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('garden.color');
goog.require('garden.compression');
goog.require('garden.selectors');
goog.require('garden.units');
goog.require('garden.util');
goog.require('garden.types');
/**
 * The current compiler flags.
 */
garden.compiler._STAR_flags_STAR_ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158),true,new cljs.core.Keyword(null,"preamble","preamble",1641040241),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"output-to","output-to",-965533968),null,new cljs.core.Keyword(null,"vendors","vendors",-153040496),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"media-expressions","media-expressions",1920421643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nesting-behavior","nesting-behavior",-1555995755),new cljs.core.Keyword(null,"default","default",-1987822328)], null)], null);
/**
 * Retun a function to call when rendering a media expression.
 *   The returned function accepts two arguments: the media
 *   expression being evaluated and the current media expression context.
 *   Both arguments are maps. This is used to provide semantics for nested
 *   media queries.
 */
garden.compiler.media_expression_behavior = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"merge","merge",-1804319409),(function (expr,context){
return cljs.core.merge.call(null,context,expr);
}),new cljs.core.Keyword(null,"default","default",-1987822328),(function (expr,_){
return expr;
})], null);
/**
 * The current parent selector context.
 */
garden.compiler._STAR_selector_context_STAR_ = null;
/**
 * The current media query context.
 */
garden.compiler._STAR_media_query_context_STAR_ = null;
var ret__29495__auto___43832 = (function (){
garden.compiler.with_selector_context = (function garden$compiler$with_selector_context(var_args){
var args__29462__auto__ = [];
var len__29455__auto___43833 = arguments.length;
var i__29456__auto___43834 = (0);
while(true){
if((i__29456__auto___43834 < len__29455__auto___43833)){
args__29462__auto__.push((arguments[i__29456__auto___43834]));

var G__43835 = (i__29456__auto___43834 + (1));
i__29456__auto___43834 = G__43835;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((3) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((3)),(0),null)):null);
return garden.compiler.with_selector_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29463__auto__);
});

garden.compiler.with_selector_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,selector_context,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),(function (){var x__29148__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("garden.compiler","*selector-context*","garden.compiler/*selector-context*",1030088346,null)),(function (){var x__29148__auto__ = selector_context;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29148__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29148__auto__);
})(),(function (){var x__29148__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29148__auto__);
})())));
});

garden.compiler.with_selector_context.cljs$lang$maxFixedArity = (3);

garden.compiler.with_selector_context.cljs$lang$applyTo = (function (seq43828){
var G__43829 = cljs.core.first.call(null,seq43828);
var seq43828__$1 = cljs.core.next.call(null,seq43828);
var G__43830 = cljs.core.first.call(null,seq43828__$1);
var seq43828__$2 = cljs.core.next.call(null,seq43828__$1);
var G__43831 = cljs.core.first.call(null,seq43828__$2);
var seq43828__$3 = cljs.core.next.call(null,seq43828__$2);
return garden.compiler.with_selector_context.cljs$core$IFn$_invoke$arity$variadic(G__43829,G__43830,G__43831,seq43828__$3);
});

return null;
})()
;
garden.compiler.with_selector_context.cljs$lang$macro = true;

var ret__29495__auto___43840 = (function (){
garden.compiler.with_media_query_context = (function garden$compiler$with_media_query_context(var_args){
var args__29462__auto__ = [];
var len__29455__auto___43841 = arguments.length;
var i__29456__auto___43842 = (0);
while(true){
if((i__29456__auto___43842 < len__29455__auto___43841)){
args__29462__auto__.push((arguments[i__29456__auto___43842]));

var G__43843 = (i__29456__auto___43842 + (1));
i__29456__auto___43842 = G__43843;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((3) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((3)),(0),null)):null);
return garden.compiler.with_media_query_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29463__auto__);
});

garden.compiler.with_media_query_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,selector_context,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),(function (){var x__29148__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("garden.compiler","*media-query-context*","garden.compiler/*media-query-context*",-1783105708,null)),(function (){var x__29148__auto__ = selector_context;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29148__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29148__auto__);
})(),(function (){var x__29148__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29148__auto__);
})())));
});

garden.compiler.with_media_query_context.cljs$lang$maxFixedArity = (3);

garden.compiler.with_media_query_context.cljs$lang$applyTo = (function (seq43836){
var G__43837 = cljs.core.first.call(null,seq43836);
var seq43836__$1 = cljs.core.next.call(null,seq43836);
var G__43838 = cljs.core.first.call(null,seq43836__$1);
var seq43836__$2 = cljs.core.next.call(null,seq43836__$1);
var G__43839 = cljs.core.first.call(null,seq43836__$2);
var seq43836__$3 = cljs.core.next.call(null,seq43836__$2);
return garden.compiler.with_media_query_context.cljs$core$IFn$_invoke$arity$variadic(G__43837,G__43838,G__43839,seq43836__$3);
});

return null;
})()
;
garden.compiler.with_media_query_context.cljs$lang$macro = true;

/**
 * Return the current list of browser vendors specified in `*flags*`.
 */
garden.compiler.vendors = (function garden$compiler$vendors(){
return cljs.core.seq.call(null,new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(garden.compiler._STAR_flags_STAR_));
});
/**
 * Return the current list of auto-prefixed properties specified in `*flags*`.
 */
garden.compiler.auto_prefixed_properties = (function garden$compiler$auto_prefixed_properties(){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.name,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466).cljs$core$IFn$_invoke$arity$1(garden.compiler._STAR_flags_STAR_)));
});
garden.compiler.auto_prefix_QMARK_ = (function garden$compiler$auto_prefix_QMARK_(property){
return cljs.core.contains_QMARK_.call(null,garden.compiler.auto_prefixed_properties.call(null),property);
});
garden.compiler.top_level_expression_QMARK_ = (function garden$compiler$top_level_expression_QMARK_(x){
var or__28286__auto__ = garden.util.rule_QMARK_.call(null,x);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
var or__28286__auto____$1 = garden.util.at_import_QMARK_.call(null,x);
if(cljs.core.truth_(or__28286__auto____$1)){
return or__28286__auto____$1;
} else {
var or__28286__auto____$2 = garden.util.at_media_QMARK_.call(null,x);
if(cljs.core.truth_(or__28286__auto____$2)){
return or__28286__auto____$2;
} else {
return garden.util.at_keyframes_QMARK_.call(null,x);
}
}
}
});
/**
 * Return a vector of [(filter pred coll) (remove pred coll)].
 */
garden.compiler.divide_vec = (function garden$compiler$divide_vec(pred,coll){
return cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,pred,coll);
});

/**
 * @interface
 */
garden.compiler.IExpandable = function(){};

/**
 * Return a list containing the expanded form of `this`.
 */
garden.compiler.expand = (function garden$compiler$expand(this$){
if((!((this$ == null))) && (!((this$.garden$compiler$IExpandable$expand$arity$1 == null)))){
return this$.garden$compiler$IExpandable$expand$arity$1(this$);
} else {
var x__28969__auto__ = (((this$ == null))?null:this$);
var m__28970__auto__ = (garden.compiler.expand[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,this$);
} else {
var m__28970__auto____$1 = (garden.compiler.expand["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IExpandable.expand",this$);
}
}
}
});

/**
 * Like flatten but only affects seqs.
 */
garden.compiler.expand_seqs = (function garden$compiler$expand_seqs(coll){
return cljs.core.mapcat.call(null,(function (x){
if(cljs.core.seq_QMARK_.call(null,x)){
return garden.compiler.expand_seqs.call(null,x);
} else {
var x__29148__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29148__auto__);
}
}),coll);
});
garden.compiler.expand_declaration_1 = (function garden$compiler$expand_declaration_1(declaration){
if(cljs.core.map_QMARK_.call(null,declaration)){
} else {
throw (new Error("Assert failed: (map? declaration)"));
}

var prefix = (function (p1__43844_SHARP_,p2__43845_SHARP_){
return garden.util.as_str.call(null,p1__43844_SHARP_,"-",p2__43845_SHARP_);
});
return cljs.core.reduce.call(null,((function (prefix){
return (function (m,p__43846){
var vec__43847 = p__43846;
var k = cljs.core.nth.call(null,vec__43847,(0),null);
var v = cljs.core.nth.call(null,vec__43847,(1),null);
if(cljs.core.truth_(garden.util.hash_map_QMARK_.call(null,v))){
return cljs.core.reduce.call(null,((function (vec__43847,k,v,prefix){
return (function (m1,p__43850){
var vec__43851 = p__43850;
var k1 = cljs.core.nth.call(null,vec__43851,(0),null);
var v1 = cljs.core.nth.call(null,vec__43851,(1),null);
return cljs.core.assoc.call(null,m1,prefix.call(null,k,k1),v1);
});})(vec__43847,k,v,prefix))
,m,garden.compiler.expand_declaration_1.call(null,v));
} else {
return cljs.core.assoc.call(null,m,garden.util.to_str.call(null,k),v);
}
});})(prefix))
,cljs.core.empty.call(null,declaration),declaration);
});
garden.compiler.expand_declaration = (function garden$compiler$expand_declaration(declaration){
if(cljs.core.empty_QMARK_.call(null,declaration)){
return declaration;
} else {
return cljs.core.with_meta.call(null,garden.compiler.expand_declaration_1.call(null,declaration),cljs.core.meta.call(null,declaration));
}
});
/**
 * Matches a single "&" or "&" follow by one or more
 *   non-whitespace characters.
 */
garden.compiler.parent_selector_re = /^&(?:\S+)?$/;
/**
 * Extract the selector portion of a parent selector reference.
 */
garden.compiler.extract_reference = (function garden$compiler$extract_reference(selector){
var temp__4657__auto__ = cljs.core.re_find.call(null,garden.compiler.parent_selector_re,garden.util.to_str.call(null,cljs.core.last.call(null,selector)));
if(cljs.core.truth_(temp__4657__auto__)){
var reference = temp__4657__auto__;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,reference));
} else {
return null;
}
});
garden.compiler.expand_selector_reference = (function garden$compiler$expand_selector_reference(selector){
var temp__4655__auto__ = garden.compiler.extract_reference.call(null,selector);
if(cljs.core.truth_(temp__4655__auto__)){
var reference = temp__4655__auto__;
var parent = cljs.core.butlast.call(null,selector);
return cljs.core.concat.call(null,cljs.core.butlast.call(null,parent),(function (){var x__29148__auto__ = garden.util.as_str.call(null,cljs.core.last.call(null,parent),reference);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29148__auto__);
})());
} else {
return selector;
}
});
garden.compiler.expand_selector = (function garden$compiler$expand_selector(selector,parent){
var selector__$1 = cljs.core.map.call(null,garden.selectors.css_selector,selector);
var selector__$2 = ((cljs.core.seq.call(null,parent))?cljs.core.map.call(null,cljs.core.flatten,garden.util.cartesian_product.call(null,parent,selector__$1)):cljs.core.map.call(null,cljs.core.list,selector__$1));
return cljs.core.map.call(null,garden.compiler.expand_selector_reference,selector__$2);
});
garden.compiler.expand_rule = (function garden$compiler$expand_rule(rule){
var vec__43854 = cljs.core.split_with.call(null,garden.selectors.selector_QMARK_,rule);
var selector = cljs.core.nth.call(null,vec__43854,(0),null);
var children = cljs.core.nth.call(null,vec__43854,(1),null);
var selector__$1 = garden.compiler.expand_selector.call(null,selector,garden.compiler._STAR_selector_context_STAR_);
var children__$1 = garden.compiler.expand.call(null,children);
var vec__43857 = garden.compiler.divide_vec.call(null,garden.util.declaration_QMARK_,children__$1);
var declarations = cljs.core.nth.call(null,vec__43857,(0),null);
var xs = cljs.core.nth.call(null,vec__43857,(1),null);
var ys = (function (){var _STAR_selector_context_STAR_43860 = garden.compiler._STAR_selector_context_STAR_;
garden.compiler._STAR_selector_context_STAR_ = ((cljs.core.seq.call(null,selector__$1))?selector__$1:garden.compiler._STAR_selector_context_STAR_);

try{return cljs.core.doall.call(null,cljs.core.mapcat.call(null,garden.compiler.expand,xs));
}finally {garden.compiler._STAR_selector_context_STAR_ = _STAR_selector_context_STAR_43860;
}})();
return cljs.core.conj.call(null,ys,cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector__$1], null),cljs.core.mapcat.call(null,garden.compiler.expand,declarations)));
});
if(typeof garden.compiler.expand_at_rule !== 'undefined'){
} else {
garden.compiler.expand_at_rule = (function (){var method_table__29241__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29242__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29243__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29244__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29245__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"garden.compiler","expand-at-rule"),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29245__auto__,method_table__29241__auto__,prefer_table__29242__auto__,method_cache__29243__auto__,cached_hierarchy__29244__auto__));
})();
}
cljs.core._add_method.call(null,garden.compiler.expand_at_rule,new cljs.core.Keyword(null,"default","default",-1987822328),(function (at_rule){
var x__29148__auto__ = at_rule;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29148__auto__);
}));
cljs.core._add_method.call(null,garden.compiler.expand_at_rule,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),(function (p__43861){
var map__43862 = p__43861;
var map__43862__$1 = ((((!((map__43862 == null)))?((((map__43862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43862):map__43862);
var value = cljs.core.get.call(null,map__43862__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__43864 = value;
var map__43864__$1 = ((((!((map__43864 == null)))?((((map__43864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43864.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43864):map__43864);
var identifier = cljs.core.get.call(null,map__43864__$1,new cljs.core.Keyword(null,"identifier","identifier",-805503498));
var frames = cljs.core.get.call(null,map__43864__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
var x__29148__auto__ = (new garden.types.CSSAtRule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),garden.util.to_str.call(null,identifier),new cljs.core.Keyword(null,"frames","frames",1765687497),cljs.core.mapcat.call(null,garden.compiler.expand,frames)], null),null,null,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29148__auto__);
}));
garden.compiler.expand_media_query_expression = (function garden$compiler$expand_media_query_expression(expression){
var temp__4655__auto__ = garden.compiler.media_expression_behavior.call(null,cljs.core.get_in.call(null,garden.compiler._STAR_flags_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"media-expressions","media-expressions",1920421643),new cljs.core.Keyword(null,"nesting-behavior","nesting-behavior",-1555995755)], null)));
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,expression,garden.compiler._STAR_media_query_context_STAR_);
} else {
return expression;
}
});
cljs.core._add_method.call(null,garden.compiler.expand_at_rule,new cljs.core.Keyword(null,"media","media",-1066138403),(function (p__43866){
var map__43867 = p__43866;
var map__43867__$1 = ((((!((map__43867 == null)))?((((map__43867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43867.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43867):map__43867);
var value = cljs.core.get.call(null,map__43867__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__43869 = value;
var map__43869__$1 = ((((!((map__43869 == null)))?((((map__43869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43869.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43869):map__43869);
var media_queries = cljs.core.get.call(null,map__43869__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var rules = cljs.core.get.call(null,map__43869__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var media_queries__$1 = garden.compiler.expand_media_query_expression.call(null,media_queries);
var xs = (function (){var _STAR_media_query_context_STAR_43874 = garden.compiler._STAR_media_query_context_STAR_;
garden.compiler._STAR_media_query_context_STAR_ = media_queries__$1;

try{return cljs.core.doall.call(null,cljs.core.mapcat.call(null,garden.compiler.expand,garden.compiler.expand.call(null,rules)));
}finally {garden.compiler._STAR_media_query_context_STAR_ = _STAR_media_query_context_STAR_43874;
}})();
var vec__43870 = garden.compiler.divide_vec.call(null,garden.util.at_media_QMARK_,xs);
var subqueries = cljs.core.nth.call(null,vec__43870,(0),null);
var rules__$1 = cljs.core.nth.call(null,vec__43870,(1),null);
return cljs.core.cons.call(null,(new garden.types.CSSAtRule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries__$1,new cljs.core.Keyword(null,"rules","rules",1198912366),rules__$1], null),null,null,null)),subqueries);
}));
garden.compiler.expand_stylesheet = (function garden$compiler$expand_stylesheet(xs){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,garden.compiler.expand,garden.compiler.expand.call(null,xs)));
});
goog.object.set(garden.compiler.IExpandable,"null",true);

goog.object.set(garden.compiler.expand,"null",(function (this$){
return null;
}));

cljs.core.IndexedSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.LazySeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.NodeSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.NodeSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.BlackNode.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.BlackNode.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_rule.call(null,this$__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.ChunkedSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.Cons.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.RSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

garden.types.CSSFunction.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

garden.types.CSSFunction.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
var x__29148__auto__ = this$__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29148__auto__);
});

cljs.core.PersistentHashMap.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
var x__29148__auto__ = garden.compiler.expand_declaration.call(null,this$__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29148__auto__);
});

cljs.core.ArrayNodeSeq.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ArrayNodeSeq.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.Subvec.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_rule.call(null,this$__$1);
});

goog.object.set(garden.compiler.IExpandable,"_",true);

goog.object.set(garden.compiler.expand,"_",(function (this$){
var x__29148__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29148__auto__);
}));

cljs.core.PersistentTreeMap.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
var x__29148__auto__ = garden.compiler.expand_declaration.call(null,this$__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29148__auto__);
});

cljs.core.ChunkedCons.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedCons.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

garden.types.CSSAtRule.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

garden.types.CSSAtRule.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_at_rule.call(null,this$__$1);
});

cljs.core.RedNode.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RedNode.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_rule.call(null,this$__$1);
});

cljs.core.PersistentVector.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_rule.call(null,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
var x__29148__auto__ = garden.compiler.expand_declaration.call(null,this$__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29148__auto__);
});

garden.color.CSSColor.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

garden.color.CSSColor.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
var x__29148__auto__ = this$__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29148__auto__);
});

cljs.core.List.prototype.garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.expand_seqs.call(null,this$__$1);
});

/**
 * @interface
 */
garden.compiler.CSSRenderer = function(){};

/**
 * Convert a Clojure data type in to a string of CSS.
 */
garden.compiler.render_css = (function garden$compiler$render_css(this$){
if((!((this$ == null))) && (!((this$.garden$compiler$CSSRenderer$render_css$arity$1 == null)))){
return this$.garden$compiler$CSSRenderer$render_css$arity$1(this$);
} else {
var x__28969__auto__ = (((this$ == null))?null:this$);
var m__28970__auto__ = (garden.compiler.render_css[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,this$);
} else {
var m__28970__auto____$1 = (garden.compiler.render_css["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"CSSRenderer.render-css",this$);
}
}
}
});

garden.compiler.comma = ", ";
garden.compiler.colon = ": ";
garden.compiler.semicolon = ";";
garden.compiler.l_brace = " {\n";
garden.compiler.r_brace = "\n}";
garden.compiler.l_brace_1 = " {\n\n";
garden.compiler.r_brace_1 = "\n\n}";
garden.compiler.rule_sep = "\n\n";
garden.compiler.indent = "  ";
/**
 * Return a space separated list of values.
 */
garden.compiler.space_separated_list = (function garden$compiler$space_separated_list(var_args){
var G__43876 = arguments.length;
switch (G__43876) {
case 1:
return garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return garden.compiler.space_separated_list.call(null,garden.compiler.render_css,xs);
});

garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return clojure.string.join.call(null," ",cljs.core.map.call(null,f,xs));
});

garden.compiler.space_separated_list.cljs$lang$maxFixedArity = 2;

/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
garden.compiler.comma_separated_list = (function garden$compiler$comma_separated_list(var_args){
var G__43879 = arguments.length;
switch (G__43879) {
case 1:
return garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return garden.compiler.comma_separated_list.call(null,garden.compiler.render_css,xs);
});

garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
var ys = (function (){var iter__29094__auto__ = (function garden$compiler$iter__43880(s__43881){
return (new cljs.core.LazySeq(null,(function (){
var s__43881__$1 = s__43881;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__43881__$1);
if(temp__4657__auto__){
var s__43881__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43881__$2)){
var c__29092__auto__ = cljs.core.chunk_first.call(null,s__43881__$2);
var size__29093__auto__ = cljs.core.count.call(null,c__29092__auto__);
var b__43883 = cljs.core.chunk_buffer.call(null,size__29093__auto__);
if((function (){var i__43882 = (0);
while(true){
if((i__43882 < size__29093__auto__)){
var x = cljs.core._nth.call(null,c__29092__auto__,i__43882);
cljs.core.chunk_append.call(null,b__43883,((cljs.core.sequential_QMARK_.call(null,x))?garden.compiler.space_separated_list.call(null,f,x):f.call(null,x)));

var G__43885 = (i__43882 + (1));
i__43882 = G__43885;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43883),garden$compiler$iter__43880.call(null,cljs.core.chunk_rest.call(null,s__43881__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43883),null);
}
} else {
var x = cljs.core.first.call(null,s__43881__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?garden.compiler.space_separated_list.call(null,f,x):f.call(null,x)),garden$compiler$iter__43880.call(null,cljs.core.rest.call(null,s__43881__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29094__auto__.call(null,xs);
})();
return clojure.string.join.call(null,garden.compiler.comma,ys);
});

garden.compiler.comma_separated_list.cljs$lang$maxFixedArity = 2;

garden.compiler.rule_join = (function garden$compiler$rule_join(xs){
return clojure.string.join.call(null,garden.compiler.rule_sep,xs);
});
/**
 * Match the start of a line if the characters immediately
 *   after it are spaces or used in a CSS id (#), class (.), or tag name.
 */
garden.compiler.indent_loc_re = (new RegExp("(?=[ A-Za-z#.}-]+)^","gm"));
garden.compiler.indent_str = (function garden$compiler$indent_str(s){
return s.replace(garden.compiler.indent_loc_re,garden.compiler.indent);
});
/**
 * Render the value portion of a declaration.
 */
garden.compiler.render_value = (function garden$compiler$render_value(x){
if(cljs.core.truth_(garden.util.at_keyframes_QMARK_.call(null,x))){
return garden.util.to_str.call(null,cljs.core.get_in.call(null,x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"identifier","identifier",-805503498)], null)));
} else {
return garden.compiler.render_css.call(null,x);
}
});
garden.compiler.render_property_and_value = (function garden$compiler$render_property_and_value(p__43886){
var vec__43887 = p__43886;
var prop = cljs.core.nth.call(null,vec__43887,(0),null);
var val = cljs.core.nth.call(null,vec__43887,(1),null);
if(cljs.core.set_QMARK_.call(null,val)){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,garden.compiler.render_property_and_value,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,cljs.core.repeat.call(null,prop),val))));
} else {
var val__$1 = ((cljs.core.sequential_QMARK_.call(null,val))?garden.compiler.comma_separated_list.call(null,garden.compiler.render_value,val):garden.compiler.render_value.call(null,val));
return garden.util.as_str.call(null,prop,garden.compiler.colon,val__$1,garden.compiler.semicolon);
}
});
/**
 * For each block in `declaration`, add sequence of blocks
 * returned from calling `f` on the block.
 */
garden.compiler.add_blocks = (function garden$compiler$add_blocks(f,declaration){
return cljs.core.mapcat.call(null,(function (p1__43890_SHARP_){
return cljs.core.cons.call(null,p1__43890_SHARP_,f.call(null,p1__43890_SHARP_));
}),declaration);
});
/**
 * Sequence of blocks with their properties prefixed by
 * each vendor in `vendors`.
 */
garden.compiler.prefixed_blocks = (function garden$compiler$prefixed_blocks(vendors,p__43891){
var vec__43892 = p__43891;
var p = cljs.core.nth.call(null,vec__43892,(0),null);
var v = cljs.core.nth.call(null,vec__43892,(1),null);
var iter__29094__auto__ = ((function (vec__43892,p,v){
return (function garden$compiler$prefixed_blocks_$_iter__43895(s__43896){
return (new cljs.core.LazySeq(null,((function (vec__43892,p,v){
return (function (){
var s__43896__$1 = s__43896;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__43896__$1);
if(temp__4657__auto__){
var s__43896__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43896__$2)){
var c__29092__auto__ = cljs.core.chunk_first.call(null,s__43896__$2);
var size__29093__auto__ = cljs.core.count.call(null,c__29092__auto__);
var b__43898 = cljs.core.chunk_buffer.call(null,size__29093__auto__);
if((function (){var i__43897 = (0);
while(true){
if((i__43897 < size__29093__auto__)){
var vendor = cljs.core._nth.call(null,c__29092__auto__,i__43897);
cljs.core.chunk_append.call(null,b__43898,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.util.vendor_prefix.call(null,vendor,cljs.core.name.call(null,p)),v], null));

var G__43899 = (i__43897 + (1));
i__43897 = G__43899;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43898),garden$compiler$prefixed_blocks_$_iter__43895.call(null,cljs.core.chunk_rest.call(null,s__43896__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43898),null);
}
} else {
var vendor = cljs.core.first.call(null,s__43896__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.util.vendor_prefix.call(null,vendor,cljs.core.name.call(null,p)),v], null),garden$compiler$prefixed_blocks_$_iter__43895.call(null,cljs.core.rest.call(null,s__43896__$2)));
}
} else {
return null;
}
break;
}
});})(vec__43892,p,v))
,null,null));
});})(vec__43892,p,v))
;
return iter__29094__auto__.call(null,vendors);
});
/**
 * Add prefixes to all blocks in `declaration` using
 * vendor prefixes in `vendors`.
 */
garden.compiler.prefix_all_properties = (function garden$compiler$prefix_all_properties(vendors,declaration){
return garden.compiler.add_blocks.call(null,cljs.core.partial.call(null,garden.compiler.prefixed_blocks,vendors),declaration);
});
/**
 * Add prefixes to all blocks in `declaration` when property
 * is in the `:auto-prefix` set.
 */
garden.compiler.prefix_auto_properties = (function garden$compiler$prefix_auto_properties(vendors,declaration){
return garden.compiler.add_blocks.call(null,(function (block){
var vec__43900 = block;
var p = cljs.core.nth.call(null,vec__43900,(0),null);
var _ = cljs.core.nth.call(null,vec__43900,(1),null);
if(cljs.core.truth_(garden.compiler.auto_prefix_QMARK_.call(null,cljs.core.name.call(null,p)))){
return garden.compiler.prefixed_blocks.call(null,vendors,block);
} else {
return null;
}
}),declaration);
});
/**
 * Prefix properties within a `declaration` if `{:prefix true}` is
 * set in its meta, or if a property is in the `:auto-prefix` set.
 */
garden.compiler.prefix_declaration = (function garden$compiler$prefix_declaration(declaration){
var vendors = (function (){var or__28286__auto__ = new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,declaration));
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return garden.compiler.vendors.call(null);
}
})();
var prefix_fn = (cljs.core.truth_(new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,declaration)))?garden.compiler.prefix_all_properties:garden.compiler.prefix_auto_properties);
return prefix_fn.call(null,vendors,declaration);
});
garden.compiler.render_declaration = (function garden$compiler$render_declaration(declaration){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,garden.compiler.render_property_and_value,garden.compiler.prefix_declaration.call(null,declaration)));
});
garden.compiler.render_selector = (function garden$compiler$render_selector(selector){
return garden.compiler.comma_separated_list.call(null,selector);
});
/**
 * Convert a vector to a CSS rule string. The vector is expected to be
 *   fully expanded.
 */
garden.compiler.render_rule = (function garden$compiler$render_rule(p__43903){
var vec__43904 = p__43903;
var selector = cljs.core.nth.call(null,vec__43904,(0),null);
var declarations = cljs.core.nth.call(null,vec__43904,(1),null);
var rule = vec__43904;
if((cljs.core.seq.call(null,rule)) && (cljs.core.every_QMARK_.call(null,cljs.core.seq,rule))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.render_selector.call(null,selector)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.l_brace),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.indent_str.call(null,clojure.string.join.call(null,"\n",cljs.core.map.call(null,garden.compiler.render_css,declarations)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.r_brace)].join('');
} else {
return null;
}
});
/**
 * Render the individual components of a media expression.
 */
garden.compiler.render_media_expr_part = (function garden$compiler$render_media_expr_part(p__43907){
var vec__43908 = p__43907;
var k = cljs.core.nth.call(null,vec__43908,(0),null);
var v = cljs.core.nth.call(null,vec__43908,(1),null);
var vec__43911 = cljs.core.map.call(null,garden.compiler.render_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var sk = cljs.core.nth.call(null,vec__43911,(0),null);
var sv = cljs.core.nth.call(null,vec__43911,(1),null);
if(v === true){
return sk;
} else {
if(v === false){
return ["not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk)].join('');
} else {
if(cljs.core._EQ_.call(null,"only",sv)){
return ["only ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk)].join('');
} else {
if(cljs.core.truth_((function (){var and__28274__auto__ = v;
if(cljs.core.truth_(and__28274__auto__)){
return cljs.core.seq.call(null,sv);
} else {
return and__28274__auto__;
}
})())){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.colon),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sv),")"].join('');
} else {
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),")"].join('');
}

}
}
}
});
/**
 * Make a media query expession from one or more maps. Keys are not
 *   validated but values have the following semantics:
 * 
 *  `true`  as in `{:screen true}`  == "screen"
 *  `false` as in `{:screen false}` == "not screen"
 *  `:only` as in `{:screen :only}  == "only screen"
 */
garden.compiler.render_media_expr = (function garden$compiler$render_media_expr(expr){
if(cljs.core.sequential_QMARK_.call(null,expr)){
return garden.compiler.comma_separated_list.call(null,cljs.core.map.call(null,garden.compiler.render_media_expr,expr));
} else {
return clojure.string.join.call(null," and ",cljs.core.map.call(null,garden.compiler.render_media_expr_part,expr));
}
});
/**
 * Render a CSSUnit.
 */
garden.compiler.render_unit = (function garden$compiler$render_unit(css_unit){
var map__43914 = css_unit;
var map__43914__$1 = ((((!((map__43914 == null)))?((((map__43914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43914.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43914):map__43914);
var magnitude = cljs.core.get.call(null,map__43914__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var unit = cljs.core.get.call(null,map__43914__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var magnitude__$1 = magnitude;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(magnitude__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,unit))].join('');
});
/**
 * Render a CSS function.
 */
garden.compiler.render_function = (function garden$compiler$render_function(css_function){
var map__43916 = css_function;
var map__43916__$1 = ((((!((map__43916 == null)))?((((map__43916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43916.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43916):map__43916);
var function$ = cljs.core.get.call(null,map__43916__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var args = cljs.core.get.call(null,map__43916__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var args__$1 = ((cljs.core.sequential_QMARK_.call(null,args))?garden.compiler.comma_separated_list.call(null,args):garden.util.to_str.call(null,args));
return garden.util.format.call(null,"%s(%s)",garden.util.to_str.call(null,function$),args__$1);
});
garden.compiler.render_color = (function garden$compiler$render_color(c){
var temp__4655__auto__ = new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(temp__4655__auto__)){
var a = temp__4655__auto__;
var map__43918 = garden.color.as_hsl.call(null,c);
var map__43918__$1 = ((((!((map__43918 == null)))?((((map__43918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43918):map__43918);
var hue = cljs.core.get.call(null,map__43918__$1,new cljs.core.Keyword(null,"hue","hue",-508078848));
var saturation = cljs.core.get.call(null,map__43918__$1,new cljs.core.Keyword(null,"saturation","saturation",-14247929));
var lightness = cljs.core.get.call(null,map__43918__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930));
var vec__43919 = cljs.core.map.call(null,garden.units.percent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [saturation,lightness], null));
var s = cljs.core.nth.call(null,vec__43919,(0),null);
var l = cljs.core.nth.call(null,vec__43919,(1),null);
return garden.util.format.call(null,"hsla(%s)",garden.compiler.comma_separated_list.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [hue,s,l,a], null)));
} else {
return garden.color.as_hex.call(null,c);
}
});
if(typeof garden.compiler.render_at_rule !== 'undefined'){
} else {
/**
 * Render a CSS at-rule
 */
garden.compiler.render_at_rule = (function (){var method_table__29241__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29242__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29243__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29244__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29245__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"garden.compiler","render-at-rule"),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29245__auto__,method_table__29241__auto__,prefer_table__29242__auto__,method_cache__29243__auto__,cached_hierarchy__29244__auto__));
})();
}
cljs.core._add_method.call(null,garden.compiler.render_at_rule,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return null;
}));
cljs.core._add_method.call(null,garden.compiler.render_at_rule,new cljs.core.Keyword(null,"import","import",-1399500709),(function (p__43923){
var map__43924 = p__43923;
var map__43924__$1 = ((((!((map__43924 == null)))?((((map__43924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43924.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43924):map__43924);
var value = cljs.core.get.call(null,map__43924__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__43926 = value;
var map__43926__$1 = ((((!((map__43926 == null)))?((((map__43926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43926.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43926):map__43926);
var url = cljs.core.get.call(null,map__43926__$1,new cljs.core.Keyword(null,"url","url",276297046));
var media_queries = cljs.core.get.call(null,map__43926__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var url__$1 = ((typeof url === 'string')?garden.util.wrap_quotes.call(null,url):garden.compiler.render_css.call(null,url));
var queries = (cljs.core.truth_(media_queries)?garden.compiler.render_media_expr.call(null,media_queries):null);
return ["@import ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(queries)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(queries)].join(''):url__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.semicolon)].join('');
}));
cljs.core._add_method.call(null,garden.compiler.render_at_rule,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),(function (p__43929){
var map__43930 = p__43929;
var map__43930__$1 = ((((!((map__43930 == null)))?((((map__43930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43930.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43930):map__43930);
var value = cljs.core.get.call(null,map__43930__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__43932 = value;
var map__43932__$1 = ((((!((map__43932 == null)))?((((map__43932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43932.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43932):map__43932);
var identifier = cljs.core.get.call(null,map__43932__$1,new cljs.core.Keyword(null,"identifier","identifier",-805503498));
var frames = cljs.core.get.call(null,map__43932__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
if(cljs.core.seq.call(null,frames)){
var body = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.util.to_str.call(null,identifier)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.l_brace_1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.indent_str.call(null,garden.compiler.rule_join.call(null,cljs.core.map.call(null,garden.compiler.render_css,frames)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.r_brace_1)].join('');
var prefix = ((function (body,map__43932,map__43932__$1,identifier,frames,map__43930,map__43930__$1,value){
return (function (vendor){
return ["@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.util.vendor_prefix.call(null,vendor,"keyframes "))].join('');
});})(body,map__43932,map__43932__$1,identifier,frames,map__43930,map__43930__$1,value))
;
return garden.compiler.rule_join.call(null,cljs.core.map.call(null,((function (body,prefix,map__43932,map__43932__$1,identifier,frames,map__43930,map__43930__$1,value){
return (function (p1__43928_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__43928_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(body)].join('');
});})(body,prefix,map__43932,map__43932__$1,identifier,frames,map__43930,map__43930__$1,value))
,cljs.core.cons.call(null,"@keyframes ",cljs.core.map.call(null,prefix,garden.compiler.vendors.call(null)))));
} else {
return null;
}
}));
cljs.core._add_method.call(null,garden.compiler.render_at_rule,new cljs.core.Keyword(null,"media","media",-1066138403),(function (p__43934){
var map__43935 = p__43934;
var map__43935__$1 = ((((!((map__43935 == null)))?((((map__43935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43935.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43935):map__43935);
var value = cljs.core.get.call(null,map__43935__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__43937 = value;
var map__43937__$1 = ((((!((map__43937 == null)))?((((map__43937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43937.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43937):map__43937);
var media_queries = cljs.core.get.call(null,map__43937__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var rules = cljs.core.get.call(null,map__43937__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
if(cljs.core.seq.call(null,rules)){
return ["@media ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.render_media_expr.call(null,media_queries)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.l_brace_1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.indent_str.call(null,garden.compiler.rule_join.call(null,cljs.core.map.call(null,garden.compiler.render_css,rules)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.compiler.r_brace_1)].join('');
} else {
return null;
}
}));
goog.object.set(garden.compiler.CSSRenderer,"null",true);

goog.object.set(garden.compiler.render_css,"null",(function (this$){
return "";
}));

garden.color.CSSColor.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

garden.color.CSSColor.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_color.call(null,this$__$1);
});

cljs.core.IndexedSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});

cljs.core.LazySeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});

cljs.core.NodeSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.NodeSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});

cljs.core.BlackNode.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.BlackNode.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_rule.call(null,this$__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMapSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});

garden.types.CSSUnit.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

garden.types.CSSUnit.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_unit.call(null,this$__$1);
});

cljs.core.ChunkedSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});

cljs.core.Cons.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});

cljs.core.RSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});

goog.object.set(garden.compiler.CSSRenderer,"number",true);

goog.object.set(garden.compiler.render_css,"number",(function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
}));

garden.types.CSSFunction.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

garden.types.CSSFunction.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_function.call(null,this$__$1);
});

cljs.core.PersistentHashMap.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_declaration.call(null,this$__$1);
});

cljs.core.ArrayNodeSeq.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ArrayNodeSeq.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});

cljs.core.Subvec.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_rule.call(null,this$__$1);
});

goog.object.set(garden.compiler.CSSRenderer,"_",true);

goog.object.set(garden.compiler.render_css,"_",(function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
}));

cljs.core.PersistentTreeMap.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_declaration.call(null,this$__$1);
});

cljs.core.ChunkedCons.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedCons.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});

garden.types.CSSAtRule.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

garden.types.CSSAtRule.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_at_rule.call(null,this$__$1);
});

cljs.core.RedNode.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RedNode.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_rule.call(null,this$__$1);
});

cljs.core.PersistentVector.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_rule.call(null,this$__$1);
});

cljs.core.Keyword.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return garden.compiler.render_declaration.call(null,this$__$1);
});

cljs.core.List.prototype.garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,garden.compiler.render_css,this$__$1);
});
/**
 * Convert a sequence of maps into CSS for use with the HTML style
 * attribute.
 */
garden.compiler.compile_style = (function garden$compiler$compile_style(ms){
return cljs.core.first.call(null,garden.compiler.render_css.call(null,garden.compiler.expand.call(null,cljs.core.reduce.call(null,cljs.core.merge,cljs.core.filter.call(null,garden.util.declaration_QMARK_,ms)))));
});
/**
 * Return a string of CSS.
 */
garden.compiler.do_compile = (function garden$compiler$do_compile(flags,rules){
var _STAR_flags_STAR_43939 = garden.compiler._STAR_flags_STAR_;
garden.compiler._STAR_flags_STAR_ = flags;

try{return garden.compiler.rule_join.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,garden.compiler.render_css,cljs.core.filter.call(null,garden.compiler.top_level_expression_QMARK_,garden.compiler.expand_stylesheet.call(null,rules)))));
}finally {garden.compiler._STAR_flags_STAR_ = _STAR_flags_STAR_43939;
}});
/**
 * Prefix stylesheet with files in preamble. Not available in
 *   ClojureScript.
 */
garden.compiler.do_preamble = (function garden$compiler$do_preamble(p__43940,stylesheet){
var map__43941 = p__43940;
var map__43941__$1 = ((((!((map__43941 == null)))?((((map__43941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43941.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43941):map__43941);
var preamble = cljs.core.get.call(null,map__43941__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
return stylesheet;
});
/**
 * Compress CSS if the pretty-print(?) flag is true.
 */
garden.compiler.do_compression = (function garden$compiler$do_compression(p__43943,stylesheet){
var map__43944 = p__43943;
var map__43944__$1 = ((((!((map__43944 == null)))?((((map__43944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43944):map__43944);
var pretty_print_QMARK_ = cljs.core.get.call(null,map__43944__$1,new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158));
var pretty_print = cljs.core.get.call(null,map__43944__$1,new cljs.core.Keyword(null,"pretty-print","pretty-print",-1314067013));
if(cljs.core.truth_((function (){var or__28286__auto__ = pretty_print_QMARK_;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return pretty_print;
}
})())){
return stylesheet;
} else {
return garden.compression.compress_stylesheet.call(null,stylesheet);
}
});
/**
 * Write contents of stylesheet to disk.
 */
garden.compiler.do_output_to = (function garden$compiler$do_output_to(p__43946,stylesheet){
var map__43947 = p__43946;
var map__43947__$1 = ((((!((map__43947 == null)))?((((map__43947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43947.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43947):map__43947);
var output_to = cljs.core.get.call(null,map__43947__$1,new cljs.core.Keyword(null,"output-to","output-to",-965533968));
return stylesheet;
});
/**
 * Convert any number of Clojure data structures to CSS.
 */
garden.compiler.compile_css = (function garden$compiler$compile_css(var_args){
var args__29462__auto__ = [];
var len__29455__auto___43954 = arguments.length;
var i__29456__auto___43955 = (0);
while(true){
if((i__29456__auto___43955 < len__29455__auto___43954)){
args__29462__auto__.push((arguments[i__29456__auto___43955]));

var G__43956 = (i__29456__auto___43955 + (1));
i__29456__auto___43955 = G__43956;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic = (function (flags,rules){
var vec__43951 = (cljs.core.truth_((function (){var and__28274__auto__ = garden.util.hash_map_QMARK_.call(null,flags);
if(cljs.core.truth_(and__28274__auto__)){
return cljs.core.some.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,flags)),cljs.core.keys.call(null,garden.compiler._STAR_flags_STAR_));
} else {
return and__28274__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,garden.compiler._STAR_flags_STAR_,flags),rules], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [garden.compiler._STAR_flags_STAR_,cljs.core.cons.call(null,flags,rules)], null));
var flags__$1 = cljs.core.nth.call(null,vec__43951,(0),null);
var rules__$1 = cljs.core.nth.call(null,vec__43951,(1),null);
return garden.compiler.do_output_to.call(null,flags__$1,garden.compiler.do_compression.call(null,flags__$1,garden.compiler.do_preamble.call(null,flags__$1,garden.compiler.do_compile.call(null,flags__$1,rules__$1))));
});

garden.compiler.compile_css.cljs$lang$maxFixedArity = (1);

garden.compiler.compile_css.cljs$lang$applyTo = (function (seq43949){
var G__43950 = cljs.core.first.call(null,seq43949);
var seq43949__$1 = cljs.core.next.call(null,seq43949);
return garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic(G__43950,seq43949__$1);
});


//# sourceMappingURL=compiler.js.map?rel=1517200930158
