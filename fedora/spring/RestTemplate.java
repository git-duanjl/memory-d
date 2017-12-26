package com.irisking.open.api.tester.web.controller;

import javax.annotation.Resource;

import org.apache.commons.lang.StringUtils;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.irisking.open.common.domain.device.Device;


@RestController
public class RpcController {
	@Resource
	private RestTemplate restTemplate;	
	HttpHeaders requestHeaders;

	/**
	 * @描述 : query （接json 转换成json rpc调用）
	 */
	@PostMapping("/a")
	public String a(String method, String header, String body, String query, String url) {
		requestHeaders = new HttpHeaders(); 
		requestHeaders.set("token","adfasdfadsf");
		A a = JSON.parseObject(query, A.class);
		HttpEntity<A > entity = new HttpEntity<A >(A ,requestHeaders);
		ResponseEntity<String> responseEntity = restTemplate.postForEntity(url, entity, String.class);
		return responseEntity.getBody();
	}
	
	/**
	 * @描述 : query （form序列化）
	 */
	@PostMapping("/b")
	public String b(String method, String header, String body, String query, String url) {
		requestHeaders = new HttpHeaders(); 
		requestHeaders.set("token","adfasdfadsf");
		MultiValueMap<String, Object> params = getUrlParams(query);
		HttpEntity<MultiValueMap<String,String>> request = new HttpEntity<MultiValueMap<String,String>>(param,requestHeaders);
        ResponseEntity<String> response = template.postForEntity(requestUrl, request, String.class);
	}
	
	
	// 组装数据
	public static MultiValueMap<String, Object> getUrlParams(String param) {
		MultiValueMap<String, Object> map = new LinkedMultiValueMap<String, Object>(0);
		if (StringUtils.isBlank(param)) {
			return map;
		}
		String[] params = param.split("&");
		for (int i = 0; i < params.length; i++) {
			String[] p = params[i].split("=");
			if (p.length == 2) {
				map.add(p[0], p[1]);
			}
		}
		return map;
	}
	
	
	
}
